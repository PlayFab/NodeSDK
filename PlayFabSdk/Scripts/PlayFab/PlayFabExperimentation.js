/// <reference path="../typings/PlayFab/PlayFabExperimentation.d.ts" />

var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

exports.CreateExclusionGroup = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Experimentation/CreateExclusionGroup",
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

exports.CreateExperiment = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Experimentation/CreateExperiment",
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

exports.DeleteExclusionGroup = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Experimentation/DeleteExclusionGroup",
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

exports.DeleteExperiment = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Experimentation/DeleteExperiment",
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

exports.GetExclusionGroups = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Experimentation/GetExclusionGroups",
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

exports.GetExclusionGroupTraffic = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Experimentation/GetExclusionGroupTraffic",
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

exports.GetExperiments = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Experimentation/GetExperiments",
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

exports.GetLatestScorecard = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Experimentation/GetLatestScorecard",
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

exports.GetTreatmentAssignment = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Experimentation/GetTreatmentAssignment",
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

exports.StartExperiment = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Experimentation/StartExperiment",
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

exports.StopExperiment = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Experimentation/StopExperiment",
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

exports.UpdateExclusionGroup = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Experimentation/UpdateExclusionGroup",
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

exports.UpdateExperiment = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Experimentation/UpdateExperiment",
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

