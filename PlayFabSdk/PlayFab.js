var url = require('url');
var https = require('https');

exports.sdk_version = "0.3.151109";

exports.settings = {
    useDevEnv: false,
    devEnvUrl: ".playfabsandbox.com",
    liveUrl: ".playfabapi.com",
    logicServerUrl: null,
    titleId: null,
    sessionTicket: null,
    developerSecretKey: null,
    globalErrorHandler: null,
};

exports.GetServerUrl = function () {
    var baseUrl = exports.settings.useDevEnv ? exports.settings.devEnvUrl : exports.settings.liveUrl;
    return "https://" + exports.settings.titleId + baseUrl;
}

exports.GetLogicServerUrl = function () {
    return exports.settings.logicServerUrl;
}

exports.MakeRequest = function (urlStr, request, authType, authValue, callback) {
    if (request == null)
        request = {};
    var requestBody = JSON.stringify(request);

    var options = url.parse(urlStr);
    if (options.protocol != "https:")
        throw "Unsupported protocol: " + urlInfo.protocol;
    options.method = 'POST';
    options.port = 443;
    options.headers = {
        'Content-Type': 'application/json',
        'Content-Length': requestBody.length,
        'X-PlayFabSDK': "NodeSDK-" + exports.sdk_version + "-" + exports.api_version
    };

    if (authType)
        options.headers[authType] = authValue;

    var post_req = https.request(options, function (res) {
        var rawReply = "";
        res.setEncoding('utf8');
        res.on('data', function (chunk) { rawReply += chunk; });
        res.on('end', function () {
            if (callback == null)
                return; // No need to bother decoding results

            var replyEnvelope = null;
            try {
                replyEnvelope = JSON.parse(rawReply);
            } catch (e) {
                // Handle when rawReply is not valid json
                replyEnvelope = {
                    code: 503, // Service Unavailable
                    status: "Service Unavailable",
                    error: "Connection error",
                    errorCode: 2, // PlayFabErrorCode.ConnectionError
                    errorMessage: rawReply
                };
            }

            if (replyEnvelope.hasOwnProperty("error") || !replyEnvelope.hasOwnProperty("data"))
                callback(replyEnvelope, null);
            else
                callback(null, replyEnvelope);
        });
    });

    post_req.on('error', function (e) {
        if (callback == null)
            return; // No need to bother decoding results

        callback({
            code: 503, // Service Unavailable
            status: "Service Unavailable",
            error: "Connection error",
            errorCode: 2, // PlayFabErrorCode.ConnectionError
            errorMessage: e.message
        }, null);
    });

    post_req.write(requestBody);
    post_req.end();
}