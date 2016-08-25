var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

exports.IsClientLoggedIn = function () {
    return PlayFab._internalSettings.sessionTicket != null || PlayFab._internalSettings.sessionTicket.length > 0
}

exports.GetPhotonAuthenticationToken = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetPhotonAuthenticationToken", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.LoginWithAndroidDeviceID = function (request, callback) {
    request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId;
    if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/LoginWithAndroidDeviceID", request, null, null, function (error, result) {
        if (result != null && result.data != null) {
            PlayFab._internalSettings.sessionTicket = result.data.hasOwnProperty("SessionTicket") ? result.data.SessionTicket : PlayFab._internalSettings.sessionTicket;
            exports._MultiStepClientLogin(result.data.SettingsForUser.NeedsAttribution);
        }
        if (callback != null)
            callback(error, result);
    });
};

exports.LoginWithCustomID = function (request, callback) {
    request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId;
    if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/LoginWithCustomID", request, null, null, function (error, result) {
        if (result != null && result.data != null) {
            PlayFab._internalSettings.sessionTicket = result.data.hasOwnProperty("SessionTicket") ? result.data.SessionTicket : PlayFab._internalSettings.sessionTicket;
            exports._MultiStepClientLogin(result.data.SettingsForUser.NeedsAttribution);
        }
        if (callback != null)
            callback(error, result);
    });
};

exports.LoginWithEmailAddress = function (request, callback) {
    request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId;
    if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/LoginWithEmailAddress", request, null, null, function (error, result) {
        if (result != null && result.data != null) {
            PlayFab._internalSettings.sessionTicket = result.data.hasOwnProperty("SessionTicket") ? result.data.SessionTicket : PlayFab._internalSettings.sessionTicket;
            exports._MultiStepClientLogin(result.data.SettingsForUser.NeedsAttribution);
        }
        if (callback != null)
            callback(error, result);
    });
};

exports.LoginWithFacebook = function (request, callback) {
    request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId;
    if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/LoginWithFacebook", request, null, null, function (error, result) {
        if (result != null && result.data != null) {
            PlayFab._internalSettings.sessionTicket = result.data.hasOwnProperty("SessionTicket") ? result.data.SessionTicket : PlayFab._internalSettings.sessionTicket;
            exports._MultiStepClientLogin(result.data.SettingsForUser.NeedsAttribution);
        }
        if (callback != null)
            callback(error, result);
    });
};

exports.LoginWithGameCenter = function (request, callback) {
    request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId;
    if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/LoginWithGameCenter", request, null, null, function (error, result) {
        if (result != null && result.data != null) {
            PlayFab._internalSettings.sessionTicket = result.data.hasOwnProperty("SessionTicket") ? result.data.SessionTicket : PlayFab._internalSettings.sessionTicket;
            exports._MultiStepClientLogin(result.data.SettingsForUser.NeedsAttribution);
        }
        if (callback != null)
            callback(error, result);
    });
};

exports.LoginWithGoogleAccount = function (request, callback) {
    request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId;
    if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/LoginWithGoogleAccount", request, null, null, function (error, result) {
        if (result != null && result.data != null) {
            PlayFab._internalSettings.sessionTicket = result.data.hasOwnProperty("SessionTicket") ? result.data.SessionTicket : PlayFab._internalSettings.sessionTicket;
            exports._MultiStepClientLogin(result.data.SettingsForUser.NeedsAttribution);
        }
        if (callback != null)
            callback(error, result);
    });
};

exports.LoginWithIOSDeviceID = function (request, callback) {
    request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId;
    if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/LoginWithIOSDeviceID", request, null, null, function (error, result) {
        if (result != null && result.data != null) {
            PlayFab._internalSettings.sessionTicket = result.data.hasOwnProperty("SessionTicket") ? result.data.SessionTicket : PlayFab._internalSettings.sessionTicket;
            exports._MultiStepClientLogin(result.data.SettingsForUser.NeedsAttribution);
        }
        if (callback != null)
            callback(error, result);
    });
};

exports.LoginWithKongregate = function (request, callback) {
    request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId;
    if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/LoginWithKongregate", request, null, null, function (error, result) {
        if (result != null && result.data != null) {
            PlayFab._internalSettings.sessionTicket = result.data.hasOwnProperty("SessionTicket") ? result.data.SessionTicket : PlayFab._internalSettings.sessionTicket;
            exports._MultiStepClientLogin(result.data.SettingsForUser.NeedsAttribution);
        }
        if (callback != null)
            callback(error, result);
    });
};

exports.LoginWithPlayFab = function (request, callback) {
    request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId;
    if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/LoginWithPlayFab", request, null, null, function (error, result) {
        if (result != null && result.data != null) {
            PlayFab._internalSettings.sessionTicket = result.data.hasOwnProperty("SessionTicket") ? result.data.SessionTicket : PlayFab._internalSettings.sessionTicket;
            exports._MultiStepClientLogin(result.data.SettingsForUser.NeedsAttribution);
        }
        if (callback != null)
            callback(error, result);
    });
};

exports.LoginWithSteam = function (request, callback) {
    request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId;
    if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/LoginWithSteam", request, null, null, function (error, result) {
        if (result != null && result.data != null) {
            PlayFab._internalSettings.sessionTicket = result.data.hasOwnProperty("SessionTicket") ? result.data.SessionTicket : PlayFab._internalSettings.sessionTicket;
            exports._MultiStepClientLogin(result.data.SettingsForUser.NeedsAttribution);
        }
        if (callback != null)
            callback(error, result);
    });
};

exports.LoginWithTwitch = function (request, callback) {
    request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId;
    if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/LoginWithTwitch", request, null, null, function (error, result) {
        if (result != null && result.data != null) {
            PlayFab._internalSettings.sessionTicket = result.data.hasOwnProperty("SessionTicket") ? result.data.SessionTicket : PlayFab._internalSettings.sessionTicket;
            exports._MultiStepClientLogin(result.data.SettingsForUser.NeedsAttribution);
        }
        if (callback != null)
            callback(error, result);
    });
};

exports.RegisterPlayFabUser = function (request, callback) {
    request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId;
    if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/RegisterPlayFabUser", request, null, null, function (error, result) {
        if (result != null && result.data != null) {
            PlayFab._internalSettings.sessionTicket = result.data.hasOwnProperty("SessionTicket") ? result.data.SessionTicket : PlayFab._internalSettings.sessionTicket;
            exports._MultiStepClientLogin(result.data.SettingsForUser.NeedsAttribution);
        }
        if (callback != null)
            callback(error, result);
    });
};

exports.AddGenericID = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/AddGenericID", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.AddUsernamePassword = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/AddUsernamePassword", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetAccountInfo = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetAccountInfo", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetPlayerCombinedInfo = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetPlayerCombinedInfo", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetPlayFabIDsFromFacebookIDs = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetPlayFabIDsFromFacebookIDs", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetPlayFabIDsFromGameCenterIDs = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetPlayFabIDsFromGameCenterIDs", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetPlayFabIDsFromGenericIDs = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetPlayFabIDsFromGenericIDs", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetPlayFabIDsFromGoogleIDs = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetPlayFabIDsFromGoogleIDs", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetPlayFabIDsFromKongregateIDs = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetPlayFabIDsFromKongregateIDs", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetPlayFabIDsFromSteamIDs = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetPlayFabIDsFromSteamIDs", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetPlayFabIDsFromTwitchIDs = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetPlayFabIDsFromTwitchIDs", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

/**
 * @deprecated Please use GetPlayerCombinedInfo instead. 
 */
exports.GetUserCombinedInfo = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetUserCombinedInfo", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.LinkAndroidDeviceID = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/LinkAndroidDeviceID", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.LinkCustomID = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/LinkCustomID", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.LinkFacebookAccount = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/LinkFacebookAccount", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.LinkGameCenterAccount = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/LinkGameCenterAccount", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.LinkGoogleAccount = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/LinkGoogleAccount", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.LinkIOSDeviceID = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/LinkIOSDeviceID", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.LinkKongregate = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/LinkKongregate", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.LinkSteamAccount = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/LinkSteamAccount", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.LinkTwitch = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/LinkTwitch", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.RemoveGenericID = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/RemoveGenericID", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.ReportPlayer = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/ReportPlayer", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.SendAccountRecoveryEmail = function (request, callback) {

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/SendAccountRecoveryEmail", request, null, null, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UnlinkAndroidDeviceID = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/UnlinkAndroidDeviceID", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UnlinkCustomID = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/UnlinkCustomID", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UnlinkFacebookAccount = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/UnlinkFacebookAccount", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UnlinkGameCenterAccount = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/UnlinkGameCenterAccount", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UnlinkGoogleAccount = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/UnlinkGoogleAccount", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UnlinkIOSDeviceID = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/UnlinkIOSDeviceID", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UnlinkKongregate = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/UnlinkKongregate", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UnlinkSteamAccount = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/UnlinkSteamAccount", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UnlinkTwitch = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/UnlinkTwitch", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UpdateUserTitleDisplayName = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/UpdateUserTitleDisplayName", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetFriendLeaderboard = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetFriendLeaderboard", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

/**
 * @deprecated Please use GetFriendLeaderboardAroundPlayer instead. 
 */
exports.GetFriendLeaderboardAroundCurrentUser = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetFriendLeaderboardAroundCurrentUser", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetFriendLeaderboardAroundPlayer = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetFriendLeaderboardAroundPlayer", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetLeaderboard = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetLeaderboard", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

/**
 * @deprecated Please use GetLeaderboardAroundPlayer instead. 
 */
exports.GetLeaderboardAroundCurrentUser = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetLeaderboardAroundCurrentUser", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetLeaderboardAroundPlayer = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetLeaderboardAroundPlayer", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetPlayerStatistics = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetPlayerStatistics", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetPlayerStatisticVersions = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetPlayerStatisticVersions", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetUserData = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetUserData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetUserPublisherData = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetUserPublisherData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetUserPublisherReadOnlyData = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetUserPublisherReadOnlyData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetUserReadOnlyData = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetUserReadOnlyData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

/**
 * @deprecated Please use GetPlayerStatistics instead. 
 */
exports.GetUserStatistics = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetUserStatistics", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UpdatePlayerStatistics = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/UpdatePlayerStatistics", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UpdateUserData = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/UpdateUserData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UpdateUserPublisherData = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/UpdateUserPublisherData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

/**
 * @deprecated Please use UpdatePlayerStatistics instead. 
 */
exports.UpdateUserStatistics = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/UpdateUserStatistics", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetCatalogItems = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetCatalogItems", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetPublisherData = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetPublisherData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetStoreItems = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetStoreItems", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetTitleData = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetTitleData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetTitleNews = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetTitleNews", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.AddUserVirtualCurrency = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/AddUserVirtualCurrency", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.ConfirmPurchase = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/ConfirmPurchase", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.ConsumeItem = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/ConsumeItem", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetCharacterInventory = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetCharacterInventory", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetPurchase = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetPurchase", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetUserInventory = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetUserInventory", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.PayForPurchase = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/PayForPurchase", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.PurchaseItem = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/PurchaseItem", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.RedeemCoupon = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/RedeemCoupon", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.StartPurchase = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/StartPurchase", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.SubtractUserVirtualCurrency = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/SubtractUserVirtualCurrency", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UnlockContainerInstance = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/UnlockContainerInstance", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UnlockContainerItem = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/UnlockContainerItem", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.AddFriend = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/AddFriend", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetFriendsList = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetFriendsList", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.RemoveFriend = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/RemoveFriend", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.SetFriendTags = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/SetFriendTags", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.RegisterForIOSPushNotification = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/RegisterForIOSPushNotification", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.RestoreIOSPurchases = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/RestoreIOSPurchases", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.ValidateIOSReceipt = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/ValidateIOSReceipt", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetCurrentGames = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetCurrentGames", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetGameServerRegions = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetGameServerRegions", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.Matchmake = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/Matchmake", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.StartGame = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/StartGame", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.AndroidDevicePushNotificationRegistration = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/AndroidDevicePushNotificationRegistration", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.ValidateGooglePlayPurchase = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/ValidateGooglePlayPurchase", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

/**
 * @deprecated Please use WritePlayerEvent instead. 
 */
exports.LogEvent = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/LogEvent", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.WriteCharacterEvent = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/WriteCharacterEvent", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.WritePlayerEvent = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/WritePlayerEvent", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.WriteTitleEvent = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/WriteTitleEvent", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.AddSharedGroupMembers = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/AddSharedGroupMembers", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.CreateSharedGroup = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/CreateSharedGroup", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetSharedGroupData = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetSharedGroupData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.RemoveSharedGroupMembers = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/RemoveSharedGroupMembers", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UpdateSharedGroupData = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/UpdateSharedGroupData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.ExecuteCloudScript = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/ExecuteCloudScript", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

/**
 * @deprecated Please use ExecuteCloudScript instead. 
 */
exports.GetCloudScriptUrl = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetCloudScriptUrl", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {
        PlayFab._internalSettings.logicServerUrl = result != null && result.data.hasOwnProperty("Url") ? result.data.Url : PlayFab._internalSettings.logicServerUrl;

        if (callback != null)
            callback(error, result);
    });
};

/**
 * @deprecated Please use ExecuteCloudScript instead. 
 */
exports.RunCloudScript = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetLogicServerUrl() + "/Client/RunCloudScript", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetContentDownloadUrl = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetContentDownloadUrl", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetAllUsersCharacters = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetAllUsersCharacters", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetCharacterLeaderboard = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetCharacterLeaderboard", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetCharacterStatistics = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetCharacterStatistics", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetLeaderboardAroundCharacter = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetLeaderboardAroundCharacter", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetLeaderboardForUserCharacters = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetLeaderboardForUserCharacters", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GrantCharacterToUser = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GrantCharacterToUser", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UpdateCharacterStatistics = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/UpdateCharacterStatistics", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetCharacterData = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetCharacterData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetCharacterReadOnlyData = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetCharacterReadOnlyData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UpdateCharacterData = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/UpdateCharacterData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.ValidateAmazonIAPReceipt = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/ValidateAmazonIAPReceipt", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.AcceptTrade = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/AcceptTrade", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.CancelTrade = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/CancelTrade", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetPlayerTrades = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetPlayerTrades", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetTradeStatus = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetTradeStatus", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.OpenTrade = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/OpenTrade", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.AttributeInstall = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/AttributeInstall", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {
        // Modify advertisingIdType:  Prevents us from sending the id multiple times, and allows automated tests to determine id was sent successfully
        PlayFab.settings.advertisingIdType += "_Successful";

        if (callback != null)
            callback(error, result);
    });
};

exports.GetPlayerSegments = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetPlayerSegments", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetPlayerTags = function (request, callback) {
    if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Client/GetPlayerTags", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports._MultiStepClientLogin = function (needsAttribution) {
    if (needsAttribution && !PlayFab.settings.disableAdvertising && Boolean(PlayFab.settings.advertisingIdType) && Boolean(PlayFab.settings.advertisingIdValue))
    {
        var request = {};
        if (PlayFab.settings.advertisingIdType === PlayFab.settings.AD_TYPE_IDFA)
            request.Idfa = PlayFab.settings.advertisingIdValue;
        else if (PlayFab.settings.advertisingIdType === PlayFab.settings.AD_TYPE_ANDROID_ID)
            request.Android_Id = PlayFab.settings.advertisingIdValue;
        else
            return;
        exports.AttributeInstall(request);
    }
}
