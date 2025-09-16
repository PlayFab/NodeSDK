/// <reference path="../typings/PlayFab/PlayFabProgression.d.ts" />

var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

exports.CreateLeaderboardDefinition = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Leaderboard/CreateLeaderboardDefinition",
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

exports.CreateStatisticDefinition = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Statistic/CreateStatisticDefinition",
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

exports.DeleteLeaderboardDefinition = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Leaderboard/DeleteLeaderboardDefinition",
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

exports.DeleteLeaderboardEntries = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Leaderboard/DeleteLeaderboardEntries",
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

exports.DeleteStatisticDefinition = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Statistic/DeleteStatisticDefinition",
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

exports.DeleteStatistics = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Statistic/DeleteStatistics",
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

exports.GetFriendLeaderboardForEntity = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Leaderboard/GetFriendLeaderboardForEntity",
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

exports.GetLeaderboard = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Leaderboard/GetLeaderboard",
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

exports.GetLeaderboardAroundEntity = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Leaderboard/GetLeaderboardAroundEntity",
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

exports.GetLeaderboardDefinition = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Leaderboard/GetLeaderboardDefinition",
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

exports.GetLeaderboardForEntities = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Leaderboard/GetLeaderboardForEntities",
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

exports.GetStatisticDefinition = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Statistic/GetStatisticDefinition",
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

exports.GetStatistics = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Statistic/GetStatistics",
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

exports.GetStatisticsForEntities = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Statistic/GetStatisticsForEntities",
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

exports.IncrementLeaderboardVersion = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Leaderboard/IncrementLeaderboardVersion",
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

exports.IncrementStatisticVersion = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Statistic/IncrementStatisticVersion",
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

exports.ListLeaderboardDefinitions = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Leaderboard/ListLeaderboardDefinitions",
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

exports.ListStatisticDefinitions = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Statistic/ListStatisticDefinitions",
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

exports.UnlinkAggregationSourceFromStatistic = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Statistic/UnlinkAggregationSourceFromStatistic",
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

exports.UnlinkLeaderboardFromStatistic = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Leaderboard/UnlinkLeaderboardFromStatistic",
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

exports.UpdateLeaderboardDefinition = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Leaderboard/UpdateLeaderboardDefinition",
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

exports.UpdateLeaderboardEntries = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Leaderboard/UpdateLeaderboardEntries",
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

exports.UpdateStatisticDefinition = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Statistic/UpdateStatisticDefinition",
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

exports.UpdateStatistics = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Statistic/UpdateStatistics",
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

