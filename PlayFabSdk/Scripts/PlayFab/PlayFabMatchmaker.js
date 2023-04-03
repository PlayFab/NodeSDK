/// <reference path="../typings/PlayFab/PlayFabMatchmaker.d.ts" />

var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

/**
 * @deprecated Do not use
 */
exports.AuthUser = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Matchmaker/AuthUser",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

/**
 * @deprecated Do not use
 */
exports.PlayerJoined = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Matchmaker/PlayerJoined",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

/**
 * @deprecated Do not use
 */
exports.PlayerLeft = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Matchmaker/PlayerLeft",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

/**
 * @deprecated Do not use
 */
exports.UserInfo = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Matchmaker/UserInfo",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

