NodeSDK README
========
1. Overview:
----
Playfab SDK for node.js applications

This SDK includes all PlayFab APIs (Client, Server, Admin) in a single javascript file suitable for using in node.js.

2. Prerequisites:
----
* Users should be very familiar with the topics covered in our [getting started guide](https://playfab.com/getting-started).

To connect to the PlayFab service, your machine must be running TLS v1.1 or better.
* For Windows, this means Windows 7 and above
* [Official Microsoft Documentation](https://msdn.microsoft.com/en-us/library/windows/desktop/aa380516%28v=vs.85%29.aspx)
* [Support for SSL/TLS protocols on Windows](http://blogs.msdn.com/b/kaushal/archive/2011/10/02/support-for-ssl-tls-protocols-on-windows.aspx)

3. Usage Instructions:
----
```
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
```

4. Troubleshooting:
----
For a complete list of available APIs, check out the [online documentation](http://api.playfab.com/Documentation/).

#### Contact Us
We love to hear from our developer community! 
Do you have ideas on how we can make our products and services better? 

Our Developer Success Team can assist with answering any questions as well as process any feedback you have about PlayFab services.

[Forums, Support and Knowledge Base](https://support.playfab.com/support/home)


5. Copyright and Licensing Information:
----
  Apache License -- 
  Version 2.0, January 2004
  http://www.apache.org/licenses/

  Full details available within the LICENSE file.

6. Version History:
----
* (v1.00) -- Initial upload
