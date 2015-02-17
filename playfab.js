
var url = require('url');
var https = require('https');
var http = require('http');

exports.sdk_version = "1.0.0";
exports.api_version = "1.1.0";

var settings = {};
exports.settings = settings;
settings.use_development_environment = false;
settings.development_environment_url = ".playfabsandbox.com";
settings.production_environment_url = ".playfabapi.com";
settings.logic_server_url = null;
settings.title_id = null;
settings.session_ticket = null;
settings.developer_secret_key = null;
settings.global_error_handler = null;

function get_server_url()
{
	var baseUrl = settings.use_development_environment ? settings.development_environment_url : settings.production_environment_url;
	if(baseUrl.substring(0, 4) == "http")
		return baseUrl;
	return "https://"+settings.title_id+baseUrl;
}

function get_logic_server_url()
{
	return settings.logic_server_url;
}

function make_request(urlStr, request, authType, authValue, callback)
{
	if(request == null)
		request = {};
	var requestBody = JSON.stringify(request);
	
	var options = url.parse(urlStr);
	options.method = 'POST';
	options.headers = {
		'Content-Type': 'application/json',
		'Content-Length': requestBody.length,
		'X-PlayFabSDK': "NodeSDK-" + exports.sdk_version + "-" + exports.api_version
	};
	
	if(authType)
	{
		options.headers[authType] = authValue;
	}
	var requestLib = null;
	
	if(options.protocol == "http:")
	{
		if(options.port == null)
			options.port = 80;
		requestLib = http;
	}
	else if(options.protocol == "https:")
	{
		if(options.port == null)
			options.port = 443;
		requestLib = https;
	}
	else
	{
		throw "Unknown protocol: "+urlInfo.protocol;
	}
	
	var post_req = requestLib.request(options, function(res)
	{
		var rawReply = "";
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			rawReply += chunk;
		});
		res.on('end', function() {
			var replyEnvelope = JSON.parse(rawReply);
			if(replyEnvelope.error || !replyEnvelope.data)
			{
				if(callback != null)
				{
					callback(replyEnvelope, null);
				}
			}
			else
			{
				if(callback != null)
				{
					callback(null, replyEnvelope.data);
				}
			}
		});
	});
	
	post_req.on('error', function(e) {
		if(callback != null)
		{
			callback({
				code: 0,
				status: "Connection error",
				error: "Connection error",
				errorCode: 1,
				errorMessage: e.message
			}, null);
		}
	});
	
	post_req.write(requestBody);
	post_req.end();
  
}


exports.admin = {};

exports.admin.GetUserAccountInfo = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/GetUserAccountInfo", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.ResetUsers = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/ResetUsers", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.SendAccountRecoveryEmail = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/SendAccountRecoveryEmail", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.UpdateUserTitleDisplayName = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/UpdateUserTitleDisplayName", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetDataReport = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/GetDataReport", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetUserData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/GetUserData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetUserInternalData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/GetUserInternalData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetUserPublisherData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/GetUserPublisherData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetUserPublisherInternalData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/GetUserPublisherInternalData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetUserPublisherReadOnlyData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/GetUserPublisherReadOnlyData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetUserReadOnlyData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/GetUserReadOnlyData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.ResetUserStatistics = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/ResetUserStatistics", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.UpdateUserData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/UpdateUserData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.UpdateUserInternalData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/UpdateUserInternalData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.UpdateUserPublisherData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/UpdateUserPublisherData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.UpdateUserPublisherInternalData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/UpdateUserPublisherInternalData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.UpdateUserPublisherReadOnlyData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/UpdateUserPublisherReadOnlyData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.UpdateUserReadOnlyData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/UpdateUserReadOnlyData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.AddNews = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/AddNews", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.AddVirtualCurrencyTypes = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/AddVirtualCurrencyTypes", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetCatalogItems = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/GetCatalogItems", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetRandomResultTables = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/GetRandomResultTables", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetStoreItems = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/GetStoreItems", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetTitleData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.ListVirtualCurrencyTypes = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/ListVirtualCurrencyTypes", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.SetCatalogItems = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/SetCatalogItems", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.SetStoreItems = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/SetStoreItems", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.SetTitleData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/SetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.UpdateCatalogItems = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/UpdateCatalogItems", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.UpdateRandomResultTables = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/UpdateRandomResultTables", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.UpdateStoreItems = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/UpdateStoreItems", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.AddUserVirtualCurrency = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/AddUserVirtualCurrency", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetUserInventory = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/GetUserInventory", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GrantItemsToUsers = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/GrantItemsToUsers", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.RevokeInventoryItem = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/RevokeInventoryItem", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.SubtractUserVirtualCurrency = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/SubtractUserVirtualCurrency", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetMatchmakerGameInfo = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/GetMatchmakerGameInfo", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetMatchmakerGameModes = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/GetMatchmakerGameModes", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.ModifyMatchmakerGameModes = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/ModifyMatchmakerGameModes", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.AddServerBuild = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/AddServerBuild", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetServerBuildInfo = function(request, callback)
{	
	
	make_request(get_server_url() + "/Admin/GetServerBuildInfo", request, null, null, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetServerBuildUploadUrl = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/GetServerBuildUploadUrl", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.ListServerBuilds = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/ListServerBuilds", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.ModifyServerBuild = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/ModifyServerBuild", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.RemoveServerBuild = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/RemoveServerBuild", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetPublisherData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/GetPublisherData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.SetPublisherData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/SetPublisherData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetCloudScriptRevision = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/GetCloudScriptRevision", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetCloudScriptVersions = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/GetCloudScriptVersions", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.SetPublishedRevision = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/SetPublishedRevision", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.UpdateCloudScript = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Admin/UpdateCloudScript", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};


exports.matchmaker = {};

exports.matchmaker.AuthUser = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Matchmaker/AuthUser", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.matchmaker.PlayerJoined = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Matchmaker/PlayerJoined", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.matchmaker.PlayerLeft = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Matchmaker/PlayerLeft", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.matchmaker.StartGame = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Matchmaker/StartGame", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.matchmaker.UserInfo = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Matchmaker/UserInfo", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};


exports.server = {};

exports.server.AuthenticateSessionTicket = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/AuthenticateSessionTicket", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetUserAccountInfo = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetUserAccountInfo", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.SendPushNotification = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/SendPushNotification", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetLeaderboard = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetLeaderboard", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetLeaderboardAroundUser = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetLeaderboardAroundUser", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetUserData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetUserData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetUserInternalData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetUserInternalData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetUserPublisherData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetUserPublisherData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetUserPublisherInternalData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetUserPublisherInternalData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetUserPublisherReadOnlyData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetUserPublisherReadOnlyData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetUserReadOnlyData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetUserReadOnlyData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetUserStatistics = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetUserStatistics", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.UpdateUserData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/UpdateUserData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.UpdateUserInternalData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/UpdateUserInternalData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.UpdateUserPublisherData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/UpdateUserPublisherData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.UpdateUserPublisherInternalData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/UpdateUserPublisherInternalData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.UpdateUserPublisherReadOnlyData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/UpdateUserPublisherReadOnlyData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.UpdateUserReadOnlyData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/UpdateUserReadOnlyData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.UpdateUserStatistics = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/UpdateUserStatistics", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetCatalogItems = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetCatalogItems", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetTitleData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.SetTitleData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/SetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.AddUserVirtualCurrency = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/AddUserVirtualCurrency", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetUserInventory = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetUserInventory", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GrantItemsToUser = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GrantItemsToUser", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GrantItemsToUsers = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GrantItemsToUsers", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.ModifyItemUses = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/ModifyItemUses", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.ReportPlayer = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/ReportPlayer", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.SubtractUserVirtualCurrency = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/SubtractUserVirtualCurrency", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.NotifyMatchmakerPlayerLeft = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/NotifyMatchmakerPlayerLeft", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.RedeemMatchmakerTicket = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/RedeemMatchmakerTicket", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.AwardSteamAchievement = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/AwardSteamAchievement", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.AddSharedGroupMembers = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/AddSharedGroupMembers", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.CreateSharedGroup = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/CreateSharedGroup", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.DeleteSharedGroup = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/DeleteSharedGroup", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetPublisherData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetPublisherData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetSharedGroupData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetSharedGroupData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.RemoveSharedGroupMembers = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/RemoveSharedGroupMembers", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.SetPublisherData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/SetPublisherData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.UpdateSharedGroupData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/UpdateSharedGroupData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client = {};

exports.client.LoginWithAndroidDeviceID = function(request, callback)
{	
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Client/LoginWithAndroidDeviceID", request, null, null, function(error, result)
	{
		settings.session_ticket = result.SessionTicket != null ? settings.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};

exports.client.LoginWithEmailAddress = function(request, callback)
{	
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Client/LoginWithEmailAddress", request, null, null, function(error, result)
	{
		settings.session_ticket = result.SessionTicket != null ? settings.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};

exports.client.LoginWithFacebook = function(request, callback)
{	
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Client/LoginWithFacebook", request, null, null, function(error, result)
	{
		settings.session_ticket = result.SessionTicket != null ? settings.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};

exports.client.LoginWithGameCenter = function(request, callback)
{	
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Client/LoginWithGameCenter", request, null, null, function(error, result)
	{
		settings.session_ticket = result.SessionTicket != null ? settings.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};

exports.client.LoginWithGoogleAccount = function(request, callback)
{	
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Client/LoginWithGoogleAccount", request, null, null, function(error, result)
	{
		settings.session_ticket = result.SessionTicket != null ? settings.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};

exports.client.LoginWithIOSDeviceID = function(request, callback)
{	
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Client/LoginWithIOSDeviceID", request, null, null, function(error, result)
	{
		settings.session_ticket = result.SessionTicket != null ? settings.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};

exports.client.LoginWithPlayFab = function(request, callback)
{	
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Client/LoginWithPlayFab", request, null, null, function(error, result)
	{
		settings.session_ticket = result.SessionTicket != null ? settings.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};

exports.client.LoginWithSteam = function(request, callback)
{	
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Client/LoginWithSteam", request, null, null, function(error, result)
	{
		settings.session_ticket = result.SessionTicket != null ? settings.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};

exports.client.RegisterPlayFabUser = function(request, callback)
{	
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Client/RegisterPlayFabUser", request, null, null, function(error, result)
	{
		settings.session_ticket = result.SessionTicket != null ? settings.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};

exports.client.AddUsernamePassword = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/AddUsernamePassword", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetAccountInfo = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetAccountInfo", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetPlayFabIDsFromFacebookIDs = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetPlayFabIDsFromFacebookIDs", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetUserCombinedInfo = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetUserCombinedInfo", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.LinkAndroidDeviceID = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/LinkAndroidDeviceID", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.LinkFacebookAccount = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/LinkFacebookAccount", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.LinkGameCenterAccount = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/LinkGameCenterAccount", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.LinkIOSDeviceID = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/LinkIOSDeviceID", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.LinkSteamAccount = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/LinkSteamAccount", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.SendAccountRecoveryEmail = function(request, callback)
{	
	
	make_request(get_server_url() + "/Client/SendAccountRecoveryEmail", request, null, null, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.UnlinkAndroidDeviceID = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UnlinkAndroidDeviceID", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.UnlinkFacebookAccount = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UnlinkFacebookAccount", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.UnlinkGameCenterAccount = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UnlinkGameCenterAccount", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.UnlinkIOSDeviceID = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UnlinkIOSDeviceID", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.UnlinkSteamAccount = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UnlinkSteamAccount", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.UpdateUserTitleDisplayName = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UpdateUserTitleDisplayName", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetFriendLeaderboard = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetFriendLeaderboard", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetLeaderboard = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetLeaderboard", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetLeaderboardAroundCurrentUser = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetLeaderboardAroundCurrentUser", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetUserData = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetUserData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetUserPublisherData = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetUserPublisherData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetUserPublisherReadOnlyData = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetUserPublisherReadOnlyData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetUserReadOnlyData = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetUserReadOnlyData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetUserStatistics = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetUserStatistics", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.UpdateUserData = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UpdateUserData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.UpdateUserPublisherData = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UpdateUserPublisherData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.UpdateUserStatistics = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UpdateUserStatistics", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetCatalogItems = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetCatalogItems", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetStoreItems = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetStoreItems", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetTitleData = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetTitleNews = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetTitleNews", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.AddUserVirtualCurrency = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/AddUserVirtualCurrency", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.ConfirmPurchase = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/ConfirmPurchase", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.ConsumeItem = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/ConsumeItem", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetUserInventory = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetUserInventory", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.PayForPurchase = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/PayForPurchase", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.PurchaseItem = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/PurchaseItem", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.RedeemCoupon = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/RedeemCoupon", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.ReportPlayer = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/ReportPlayer", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.StartPurchase = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/StartPurchase", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.SubtractUserVirtualCurrency = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/SubtractUserVirtualCurrency", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.UnlockContainerItem = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UnlockContainerItem", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.AddFriend = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/AddFriend", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetFriendsList = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetFriendsList", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.RemoveFriend = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/RemoveFriend", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.SetFriendTags = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/SetFriendTags", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.RegisterForIOSPushNotification = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/RegisterForIOSPushNotification", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.RestoreIOSPurchases = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/RestoreIOSPurchases", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.ValidateIOSReceipt = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/ValidateIOSReceipt", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetCurrentGames = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetCurrentGames", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetGameServerRegions = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetGameServerRegions", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.Matchmake = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/Matchmake", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.StartGame = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/StartGame", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.AndroidDevicePushNotificationRegistration = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/AndroidDevicePushNotificationRegistration", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.ValidateGooglePlayPurchase = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/ValidateGooglePlayPurchase", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.LogEvent = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/LogEvent", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.AddSharedGroupMembers = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/AddSharedGroupMembers", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.CreateSharedGroup = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/CreateSharedGroup", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetPublisherData = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetPublisherData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetSharedGroupData = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetSharedGroupData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.RemoveSharedGroupMembers = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/RemoveSharedGroupMembers", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.UpdateSharedGroupData = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UpdateSharedGroupData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.RefreshPSNAuthToken = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/RefreshPSNAuthToken", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetCloudScriptUrl = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetCloudScriptUrl", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		settings.logic_server_url = result.Url;

		if(callback != null)
			callback(error, result);
	});
};

exports.client.RunCloudScript = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_logic_server_url() + "/Client/RunCloudScript", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};



