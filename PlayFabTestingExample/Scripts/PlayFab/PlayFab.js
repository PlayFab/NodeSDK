/// <reference path="../typings/PlayFab/PlayFab.d.ts" />

var url = require("url");
var https = require("https");

exports.sdk_version = "1.17.171127";
exports.buildIdentifier = "jbuild_nodesdk_0";

var settings = exports.settings = {
    useDevEnv: false,
    titleId: null, // You must set this value for PlayFabSdk to work properly (Found in the Game Manager for your title, at the PlayFab Website)
    globalErrorHandler: null,
    developerSecretKey: null, // You must set this value for PlayFabSdk to work properly (Found in the Game Manager for your title, at the PlayFab Website)
    advertisingIdType: null, // Set this to the appropriate AD_TYPE_X constant below
    advertisingIdValue: null, // Set this to corresponding device value

    // disableAdvertising is provided for completeness, but changing it is not suggested
    // Disabling this may prevent your advertising-related PlayFab marketplace partners from working correctly
    disableAdvertising: false,
    AD_TYPE_IDFA: "Idfa",
    AD_TYPE_ANDROID_ID: "Adid",
};

var _internalSettings = exports._internalSettings = {
    devEnvUrl: ".playfabsandbox.com",
    liveUrl: ".playfabapi.com",
    sessionTicket: null,
};

exports.GetServerUrl = function () {
    var baseUrl = exports.settings.useDevEnv ? exports._internalSettings.devEnvUrl : exports._internalSettings.liveUrl;
    return "https://" + exports.settings.titleId + baseUrl;
}

exports.MakeRequest = function (urlStr, request, authType, authValue, callback) {
    if (request == null)
        request = {};
    var requestBody = null;
    if (Number(process.version.match(/^v(\d+\.\d+)/)[1]) >= 4.7)
        requestBody = Buffer.from(JSON.stringify(request), 'utf8');
    else
        requestBody = JSON.stringify(request);

    var options = url.parse(urlStr);
    if (options.protocol !== "https:")
        throw "Unsupported protocol: " + options.protocol;
    options.method = "POST";
    options.port = 443;
    options.headers = {
        "Content-Type": "application/json",
        "Content-Length": requestBody.length,
        "X-PlayFabSDK": "NodeSDK-" + exports.sdk_version + "-" + exports.api_version
    };

    if (authType)
        options.headers[authType] = authValue;

    var postReq = https.request(options, function (res) {
        var rawReply = "";
        res.setEncoding("utf8");
        res.on("data", function (chunk) { rawReply += chunk; });
        res.on("end", function () {
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

    postReq.on("error", function (e) {
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

    postReq.write(requestBody);
    postReq.end();
}