/// <reference path="../typings/PlayFab/PlayFabAddon.d.ts" />

var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

exports.CreateOrUpdateApple = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/CreateOrUpdateApple",
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

exports.CreateOrUpdateFacebook = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/CreateOrUpdateFacebook",
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

exports.CreateOrUpdateFacebookInstantGames = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/CreateOrUpdateFacebookInstantGames",
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

exports.CreateOrUpdateGoogle = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/CreateOrUpdateGoogle",
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

exports.CreateOrUpdateKongregate = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/CreateOrUpdateKongregate",
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

exports.CreateOrUpdateNintendo = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/CreateOrUpdateNintendo",
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

exports.CreateOrUpdatePSN = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/CreateOrUpdatePSN",
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

exports.CreateOrUpdateSteam = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/CreateOrUpdateSteam",
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

exports.CreateOrUpdateToxMod = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/CreateOrUpdateToxMod",
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

exports.CreateOrUpdateTwitch = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/CreateOrUpdateTwitch",
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

exports.DeleteApple = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/DeleteApple",
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

exports.DeleteFacebook = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/DeleteFacebook",
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

exports.DeleteFacebookInstantGames = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/DeleteFacebookInstantGames",
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

exports.DeleteGoogle = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/DeleteGoogle",
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

exports.DeleteKongregate = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/DeleteKongregate",
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

exports.DeleteNintendo = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/DeleteNintendo",
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

exports.DeletePSN = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/DeletePSN",
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

exports.DeleteSteam = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/DeleteSteam",
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

exports.DeleteToxMod = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/DeleteToxMod",
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

exports.DeleteTwitch = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/DeleteTwitch",
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

exports.GetApple = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/GetApple",
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

exports.GetFacebook = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/GetFacebook",
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

exports.GetFacebookInstantGames = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/GetFacebookInstantGames",
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

exports.GetGoogle = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/GetGoogle",
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

exports.GetKongregate = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/GetKongregate",
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

exports.GetNintendo = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/GetNintendo",
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

exports.GetPSN = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/GetPSN",
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

exports.GetSteam = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/GetSteam",
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

exports.GetToxMod = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/GetToxMod",
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

exports.GetTwitch = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Addon/GetTwitch",
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

