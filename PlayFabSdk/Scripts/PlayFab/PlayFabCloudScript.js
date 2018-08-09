/// <reference path="../typings/PlayFab/PlayFabCloudScript.d.ts" />

var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

exports.ExecuteEntityCloudScript = function (request, callback) {
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/CloudScript/ExecuteEntityCloudScript", request, "X-EntityToken", PlayFab._internalSettings.entityToken, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

