var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

exports.GetUserAccountInfo = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetUserAccountInfo", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.ResetUsers = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/ResetUsers", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.SendAccountRecoveryEmail = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/SendAccountRecoveryEmail", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UpdateUserTitleDisplayName = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/UpdateUserTitleDisplayName", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.DeleteUsers = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/DeleteUsers", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetDataReport = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetDataReport", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetUserData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetUserData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetUserInternalData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetUserInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetUserPublisherData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetUserPublisherData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetUserPublisherInternalData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetUserPublisherInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetUserPublisherReadOnlyData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetUserPublisherReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetUserReadOnlyData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetUserReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.ResetUserStatistics = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/ResetUserStatistics", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UpdateUserData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/UpdateUserData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UpdateUserInternalData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/UpdateUserInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UpdateUserPublisherData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/UpdateUserPublisherData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UpdateUserPublisherInternalData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/UpdateUserPublisherInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UpdateUserPublisherReadOnlyData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/UpdateUserPublisherReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UpdateUserReadOnlyData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/UpdateUserReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.AddNews = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/AddNews", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.AddVirtualCurrencyTypes = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/AddVirtualCurrencyTypes", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetCatalogItems = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetCatalogItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetRandomResultTables = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetRandomResultTables", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetStoreItems = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetStoreItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetTitleData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetTitleData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.ListVirtualCurrencyTypes = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/ListVirtualCurrencyTypes", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.SetCatalogItems = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/SetCatalogItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.SetStoreItems = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/SetStoreItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.SetTitleData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/SetTitleData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.SetupPushNotification = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/SetupPushNotification", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UpdateCatalogItems = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/UpdateCatalogItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UpdateRandomResultTables = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/UpdateRandomResultTables", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UpdateStoreItems = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/UpdateStoreItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.AddUserVirtualCurrency = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/AddUserVirtualCurrency", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetUserInventory = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetUserInventory", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GrantItemsToUsers = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GrantItemsToUsers", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.RevokeInventoryItem = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/RevokeInventoryItem", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.SubtractUserVirtualCurrency = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/SubtractUserVirtualCurrency", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetMatchmakerGameInfo = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetMatchmakerGameInfo", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetMatchmakerGameModes = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetMatchmakerGameModes", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.ModifyMatchmakerGameModes = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/ModifyMatchmakerGameModes", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.AddServerBuild = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/AddServerBuild", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetServerBuildInfo = function (request, callback) {

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetServerBuildInfo", request, null, null, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetServerBuildUploadUrl = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetServerBuildUploadUrl", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.ListServerBuilds = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/ListServerBuilds", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.ModifyServerBuild = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/ModifyServerBuild", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.RemoveServerBuild = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/RemoveServerBuild", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetPublisherData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetPublisherData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.SetPublisherData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/SetPublisherData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetCloudScriptRevision = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetCloudScriptRevision", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetCloudScriptVersions = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetCloudScriptVersions", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.SetPublishedRevision = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/SetPublishedRevision", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.UpdateCloudScript = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/UpdateCloudScript", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.DeleteContent = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/DeleteContent", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetContentList = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetContentList", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.GetContentUploadUrl = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/GetContentUploadUrl", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

exports.ResetCharacterStatistics = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";

    PlayFab.MakeRequest(PlayFab.GetServerUrl() + "/Admin/ResetCharacterStatistics", request, "X-SecretKey", PlayFab.settings.developerSecretKey, function (error, result) {

        if (callback != null)
            callback(error, result);
    });
};

