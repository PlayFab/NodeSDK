
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

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.SendAccountRecoveryEmail = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.UpdateUserTitleDisplayName = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetUserData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetUserInternalData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetUserReadOnlyData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.ResetUserStatistics = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.UpdateUserData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.UpdateUserInternalData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.UpdateUserReadOnlyData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.AddNews = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.AddVirtualCurrencyTypes = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetCatalogItems = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetRandomResultTables = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetStoreItems = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetTitleData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.ListVirtualCurrencyTypes = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.SetCatalogItems = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.SetStoreItems = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.SetTitleData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.UpdateCatalogItems = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.UpdateRandomResultTables = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.UpdateStoreItems = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.AddUserVirtualCurrency = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetUserInventory = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GrantItemsToUsers = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.RevokeInventoryItem = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.SubtractUserVirtualCurrency = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetMatchmakerGameInfo = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetMatchmakerGameModes = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.ModifyMatchmakerGameModes = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.AddServerBuild = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetServerBuildInfo = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.GetServerBuildUploadUrl = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.ListServerBuilds = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.ModifyServerBuild = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.RemoveServerBuild = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.DeleteServerLogicFile = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.ListServerLogicFiles = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.admin.UpdateServerLogicFile = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};


exports.matchmaker = {};

exports.matchmaker.AuthUser = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.matchmaker.PlayerJoined = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.matchmaker.PlayerLeft = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.matchmaker.StartGame = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.matchmaker.UserInfo = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};


exports.server = {};

exports.server.GetUserAccountInfo = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.SendPushNotification = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetLeaderboard = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetLeaderboardAroundUser = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetUserData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetUserInternalData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetUserReadOnlyData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetUserStatistics = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.UpdateUserData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.UpdateUserInternalData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.UpdateUserReadOnlyData = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.UpdateUserStatistics = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetCatalogItems = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
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

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.AddUserVirtualCurrency = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GetUserInventory = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.GrantItemsToUsers = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.SubtractUserVirtualCurrency = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.NotifyMatchmakerPlayerLeft = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.RedeemMatchmakerTicket = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.server.AwardSteamAchievement = function(request, callback)
{	
	if (settings.developer_secret_key == null) throw "Must have PlayFabSettings.DeveloperSecretKey set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-SecretKey", settings.developer_secret_key, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client = {};

exports.client.AddUsernamePassword = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.LoginWithAndroidDeviceID = function(request, callback)
{	
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, null, null, function(error, result)
	{
		settings.session_ticket = result.SessionTicket != null ? settings.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};

exports.client.LoginWithFacebook = function(request, callback)
{	
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, null, null, function(error, result)
	{
		settings.session_ticket = result.SessionTicket != null ? settings.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};

exports.client.LoginWithGameCenter = function(request, callback)
{	
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, null, null, function(error, result)
	{
		settings.session_ticket = result.SessionTicket != null ? settings.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};

exports.client.LoginWithGoogleAccount = function(request, callback)
{	
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, null, null, function(error, result)
	{
		settings.session_ticket = result.SessionTicket != null ? settings.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};

exports.client.LoginWithIOSDeviceID = function(request, callback)
{	
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, null, null, function(error, result)
	{
		settings.session_ticket = result.SessionTicket != null ? settings.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};

exports.client.LoginWithPlayFab = function(request, callback)
{	
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, null, null, function(error, result)
	{
		settings.session_ticket = result.SessionTicket != null ? settings.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};

exports.client.LoginWithSteam = function(request, callback)
{	
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, null, null, function(error, result)
	{
		settings.session_ticket = result.SessionTicket != null ? settings.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};

exports.client.RegisterPlayFabUser = function(request, callback)
{	
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, null, null, function(error, result)
	{
		settings.session_ticket = result.SessionTicket != null ? settings.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};

exports.client.SendAccountRecoveryEmail = function(request, callback)
{	
	
	make_request(get_server_url() + "/Server/GetTitleData", request, null, null, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetAccountInfo = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetUserCombinedInfo = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.LinkFacebookAccount = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.LinkGameCenterAccount = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.LinkSteamAccount = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.UnlinkFacebookAccount = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.UnlinkGameCenterAccount = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.UnlinkSteamAccount = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.UpdateEmailAddress = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.UpdatePassword = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.UpdateUserTitleDisplayName = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetFriendLeaderboard = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetLeaderboard = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetLeaderboardAroundCurrentUser = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetUserData = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetUserReadOnlyData = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetUserStatistics = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.UpdateUserData = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.UpdateUserStatistics = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetCatalogItems = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetStoreItems = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetTitleData = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetTitleNews = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.AddUserVirtualCurrency = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.ConfirmPurchase = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.ConsumeItem = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetUserInventory = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.PayForPurchase = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.PurchaseItem = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.RedeemCoupon = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.StartPurchase = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.SubtractUserVirtualCurrency = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.UnlockContainerItem = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.AddFriend = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetFriendsList = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.RemoveFriend = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.SetFriendTags = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.RegisterForIOSPushNotification = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.ValidateIOSReceipt = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetCurrentGames = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetGameServerRegions = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.Matchmake = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.StartGame = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.AndroidDevicePushNotificationRegistration = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.ValidateGooglePlayPurchase = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.LogEvent = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.AddSharedGroupMembers = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.CreateSharedGroup = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetSharedGroupData = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.RemoveSharedGroupMembers = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.UpdateSharedGroupData = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};

exports.client.GetLogicServerUrl = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		settings.logic_server_url = result.Url;

		if(callback != null)
			callback(error, result);
	});
};

exports.client.ServerAction = function(request, callback)
{	
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_logic_server_url() + "/Server/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		
		if(callback != null)
			callback(error, result);
	});
};



