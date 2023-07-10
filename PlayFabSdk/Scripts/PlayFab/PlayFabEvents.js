/// <reference path="../typings/PlayFab/PlayFabEvents.d.ts" />

var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

exports.CreateTelemetryKey = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Event/CreateTelemetryKey",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.DeleteTelemetryKey = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Event/DeleteTelemetryKey",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetTelemetryKey = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Event/GetTelemetryKey",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ListTelemetryKeys = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Event/ListTelemetryKeys",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.SetTelemetryKeyActive = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Event/SetTelemetryKeyActive",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.WriteEvents = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Event/WriteEvents",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.WriteTelemetryEvents = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Event/WriteTelemetryEvents",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

