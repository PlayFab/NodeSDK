var playfab = require('./playfab.js')

playfab.settings.title_id = "F00";
playfab.settings.developer_secret_key = "XXX";

playfab.server.GetTitleData({Keys : ["Sample"]}, function(error, result)
{
	if(error)
	{
		console.log("Got an error: ",error);
		return;
	}

	console.log("Reply: ",result);
});
