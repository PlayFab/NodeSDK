
JavaScript with TypeScript Getting Started Guide
----

This guide will help you make your first API call using a Web TypeScript environment.  

TypeScript Project Setup
----

* OS: This guide is written for Windows 10 and Visual Studio
  * The "Project Setup" section of this guide will not be very useful for other operating systems and environments (sorry!)
  * TypeScript works on a wide variety of Operating Systems, Environments, and tools
* Installation
  * Download and install Visual Studio 2015
    * Update TypeScript within VS to the [latest version](https://www.microsoft.com/en-us/download/details.aspx?id=48593) (2.1.5 when this document was written)
    * [OPTIONAL] Install the [Node.js tools](https://www.visualstudio.com/vs/node-js/) into Visual Studio
  * Download and extract the [PlayFab JavaScriptSDK](https://github.com/PlayFab/JavaScriptSDK/archive/master.zip) to a local folder of your choosing {playFabSdkLocation}
* New Project Setup
  * Open Visual Studio and create a new "Blank Node.js Console Application"
    * ![TS image](/images/TypeScript/NewNodeProj.png)
  * Install the "playfab-sdk" npm module
    * There are several ways to do this, but we'll cover the way that works directly in Visual Studio
    * Right-Click on "npm" in your VS-project, and "Install New npm Packages..." (There may be a long download here)
    * Once the new "Install New npm Packages" popup window opens, search "playfab"
    * Find the "playfab-sdk" and select the latest version, and click "Install Package"
    * ![TS image](/images/TypeScript/InstallPlayFabNpm.png)
* Include the "playfab-sdk" typings files from the npm module in your project
  * You must do this In order to get the benefit of type-checking and intellisense (Otherwise, you're just using basic Node/JS)
  * Expand the following folders: node-Modules/playfab-sdk/Scripts
  * Right click the "Scripts" folder and "Include In Project"
    * You may get a performance warning popup suggesting you "Do Nothing".  For this example, this action is safe: "include 'node_modules' folder in project"
  * ![TS image](/images/TypeScript/IncludeTypings.png)
* If you run your project now, you'll see the default "Hello World" which is part of the Microsoft Example.  We will set up an api call in the next section.
* Installation Complete!

Set up your first API call
----

This guide will provide the minimum steps to make your first PlayFab API call. Confirmation will be done with the Console log.

Double click app.ts, and replace the contents with this:

```TypeScript
var PlayFab: PlayFabModule.IPlayFab = require("PlayFab-sdk/Scripts/PlayFab/PlayFab");
var PlayFabClient: PlayFabClientModule.IPlayFabClient = require("PlayFab-sdk/Scripts/PlayFab/PlayFabClient");

function DoExampleLoginWithCustomID(): void {
    PlayFab.settings.titleId = "144";
    var loginRequest: PlayFabClientModels.LoginWithCustomIDRequest = {
        CustomId: "GettingStartedGuide",
        CreateAccount: true
    };

    PlayFabClient.LoginWithCustomID(loginRequest, LoginCallback);
}

function LoginCallback(error: PlayFabModule.IPlayFabError, result: PlayFabModule.IPlayFabSuccessContainer<PlayFabClientModels.LoginResult>): void {
    if (result !== null) {
        console.log("Congratulations, you made your first successful API call!");
    } else if (error !== null) {
        console.log("Something went wrong with your first API call.");
        console.log("Here's some debug information:");
        console.log(CompileErrorReport(error));
    }
}

// This is a utility function we haven't put into the core SDK yet.  Feel free to use it.
function CompileErrorReport(error: PlayFabModule.IPlayFabError): string {
    if (error == null)
        return "";
    var fullErrors: string = error.errorMessage;
    for (var paramName in error.errorDetails)
        for (var msgIdx in error.errorDetails[paramName])
            fullErrors += "\n" + paramName + ": " + error.errorDetails[paramName][msgIdx];
    return fullErrors;
}

// Kick off the actual login call
DoExampleLoginWithCustomID();
```

Finish and Execute
----

* Run your project:
  * Dropdown -> Debug -> Start Debugging
* You should see the following text as a result:
  * Congratulations, you made your first successful API call!
* At this point, you can start making other api calls, and building your game
* For a list of all available client API calls, see our documentation:
  * https://api.playfab.com/
* Happy coding!


Deconstruct the code
----

* Line by line breakdown for app.ts
  * PlayFab.settings.titleId = "xxxx";
    * Every PlayFab developer creates a title in Game Manager.  When you publish your game, you must code that titleId into your game.  This lets the client know how to access the correct data within PlayFab.  For most users, just consider it a mandatory step that makes PlayFab work.
  * var loginRequest: PlayFabClientModels.LoginWithCustomIDRequest = { CustomId: "GettingStartedGuide", CreateAccount: true };
    * Defines the loginRequest as a LoginWithCustomIDRequest type object
    * Most PlayFab API methods require input parameters, and those input parameters are packed into a request object
    * Every API method requires a unique request object, with a mix of optional and mandatory parameters
      * For LoginWithCustomIDRequest, there is a mandatory parameter of CustomId, which uniquely identifies a player and CreateAccount, which allows the creation of a new account with this call.  TitleId is another mandatory parameter in JavaScript, and it must match PlayFab.settings.titleId
  * PlayFabClientSDK.LoginWithCustomID(loginRequest, LoginCallback);
    * This begins the async request to "LoginWithCustomID", which will call LoginCallback when the API call is complete
  * For login, most developers will want to use a more appropriate login method
    * See the [PlayFab Login Documentation](https://api.playfab.com/Documentation/Client#Authentication) for a list of all login methods, and input parameters.  Common choices are:
      * [LoginWithAndroidDeviceID](https://api.playfab.com/Documentation/Client/method/LoginWithAndroidDeviceID)
      * [LoginWithIOSDeviceID](https://api.playfab.com/Documentation/Client/method/LoginWithIOSDeviceID)
      * [LoginWithEmailAddress](https://api.playfab.com/Documentation/Client/method/LoginWithEmailAddress)
* LoginCallback contains two parameters: error, result
  * When successful, error will be null, and the result object will contain the requested information, according to the API called
    * This result contains some basic information about the player, but for most users, login is simply a mandatory step before calling other APIs.
  * If error is not null, your API has failed
    * API calls can fail for many reasons, and you should always attempt to handle failure
    * Why API calls fail (In order of likelihood)
      * PlayFabSettings.TitleId is not set.  If you forget to set titleId to your title, then nothing will work.
      * Request parameters.  If you have not provided the correct or required information for a particular API call, then it will fail.  See error.errorMessage, error.errorDetails, or error.GenerateErrorReport() for more info.
      * Device connectivity issue.  Cell-phones lose/regain connectivity constantly, and so any API call at any time can fail randomly, and then work immediately after.  Going into a tunnel can disconnect you completely.
      * PlayFab server issue.  As with all software, there can be issues.  See our [release notes](https://api.playfab.com/releaseNotes/) for updates.
      * The internet is not 100% reliable.  Sometimes the message is corrupted or fails to reach the PlayFab server.
    * If you are having difficulty debugging an issue, and the information within the error information is not sufficient, please visit us on our [forums](https://community.playfab.com/index.html)
