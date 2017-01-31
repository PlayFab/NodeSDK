
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

...
