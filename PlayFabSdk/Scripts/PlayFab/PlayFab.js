/// <reference path="../typings/PlayFab/PlayFab.d.ts" />

var url = require("url");
var https = require("https");
var zlib = require('zlib');

exports.sdk_version = "2.40.191218";
exports.buildIdentifier = "jbuild_nodesdk__sdk-genericslave-3_1";

var settings = exports.settings = {
    productionUrl: ".playfabapi.com",
    verticalName: null, // The name of a customer vertical. This is only for customers running a private cluster. Generally you shouldn't touch this
    titleId: null, // You must set this value for PlayFabSdk to work properly (Found in the Game Manager for your title, at the PlayFab Website)
    globalErrorHandler: null,
    developerSecretKey: null, // You must set this value for PlayFabSdk to work properly (Found in the Game Manager for your title, at the PlayFab Website)
    port: 443,
    advertisingIdType: null, // Set this to the appropriate AD_TYPE_X constant below
    advertisingIdValue: null, // Set this to corresponding device value

    // disableAdvertising is provided for completeness, but changing it is not suggested
    // Disabling this may prevent your advertising-related PlayFab marketplace partners from working correctly
    disableAdvertising: false,
    AD_TYPE_IDFA: "Idfa",
    AD_TYPE_ANDROID_ID: "Adid",
    gzip: false
};

var _internalSettings = exports._internalSettings = {
    entityToken: null,
    sessionTicket: null,
    requestGetParams: {
        sdk: "JavaScriptSDK-2.40.191218"
    },
};

exports.GetServerUrl = function () {
    var baseUrl = exports.settings.productionUrl;
    if (!(baseUrl.substring(0, 4) === "http")) {
        if (exports.settings.verticalName) {
            return "https://" + exports.settings.verticalName + baseUrl;
        } else {
            return "https://" + exports.settings.titleId + baseUrl;
        }
    } else {
        return baseUrl;
    }
}

exports.MakeRequest = function (urlStr, request, authType, authValue, callback) {
    if (request == null)
        request = {};
    var requestBody = Buffer.from(JSON.stringify(request), "utf8");

    var urlArr = [urlStr]; //make a new array for the URL
    var getParams = _internalSettings.requestGetParams;
    if (getParams != null) {
        var firstParam = true;
        for (var key in getParams) {
            if (firstParam) {
                urlArr.push("?");
                firstParam = false;
            } else {
                urlArr.push("&");
            }
            urlArr.push(key);
            urlArr.push("=");
            urlArr.push(getParams[key]);
        }
    }

    var completeUrl = urlArr.join("");

    var options = url.parse(completeUrl);
    if (options.protocol !== "https:")
        throw new Error("Unsupported protocol: " + options.protocol);
    options.method = "POST";
    options.port = options.port || exports.settings.port;
    options.headers = {
        "Content-Type": "application/json",
        "X-PlayFabSDK": "NodeSDK-" + exports.sdk_version + "-" + exports.api_version
    };

    if (authType)
        options.headers[authType] = authValue;

    var postReq = https.request(options, function (res) {
        var rawReply = "";
        var handler;
        if (settings.gzip) {
            handler = zlib.createGunzip();
            res.pipe(handler);
        }
        else {
            handler = res;
        }
        handler.setEncoding("utf8");
        handler.on("data", function (chunk) { rawReply += chunk; });
        handler.on("end", function () {
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

    if (settings.gzip) {
        postReq.setHeader("Accept-Encoding", "GZIP");
        postReq.setHeader("Content-Encoding", "GZIP");
        zlib.gzip(requestBody, function (e, compressedBody) {
            if (e) {
                if (callback != null) {
                    callback({
                        code: 400,
                        status: "Bad Request",
                        error: "Gzip error",
                        errorCode: 2,
                        errorMessage: e.message
                    }, null);
                }
                return;
            }
            postReq.setHeader("Content-Length", compressedBody.length);
            postReq.write(compressedBody);
            postReq.end();
        });
    }
    else {
        postReq.setHeader("Content-Length", requestBody.length);
        postReq.write(requestBody);
        postReq.end();
    }
}
