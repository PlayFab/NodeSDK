# NodeSDK 2.0 upgrade guide

A new major version of NodeSDK has been released. The require statements for the node package from version 1.x to version 2.x are incompatible. This guide will help you re-write your node require statements and enable you to upgrade from 1.x to 2.x

## New 2.x Require syntax

An experienced NPM package user will find the new require statements to match expected conventions:

Import the entire module with: `var playfab = require("playfab-sdk");`

All APIs, settings, and other elements of the package are contained within.

For example:

```
var playfab = require("playfab-sdk");
var PlayFabClient = playfab.PlayFabClient;
// These will replace any existing PlayFab require lines in your SDK

console.log("PlayFab Exists: " + (playfab != null));
console.log("PlayFab settings Exists: " + (playfab.settings != null));
console.log("PlayFab client Exists: " + (playfab.PlayFabClient != null));

for(var each in playfab)
{
    console.log("Each : " + each);
}

for(var each in playfab.settings)
{
    console.log("Each.settings : " + each);
}

console.log("Login Function: " + (PlayFabClient.LoginWithCustomID != undefined));
```

## Old 1.x Require syntax (This is what you should be deleting)

The old package was not defined correctly, and you had to import PlayFab files by their full path. This is not typical npm package convention. This update is designed to correct this problem.

Additionally, on some very rare environments, there were issues with multiple require statements and shared variables, which has been resolved by the single require above.

(BEGIN - This is the code you should delete, do not mimic this code)

```
var playfab = require("./node_modules/playfab-sdk/scripts/PlayFab/PlayFab.js");
var PlayFabClient = require("./node_modules/playfab-sdk/scripts/PlayFab/PlayFabClient.js");
// (Replace these two lines with the require lines from the code block above)

for(var each in playfab)
{
    console.log("Each : " + each);
}

for(var each in playfab.settings)
{
    console.log("Each.settings : " + each);
}

console.log("Login Function: " + (PlayFabClient.LoginWithCustomID != undefined));
```

(END - This is the code you should delete, do not mimic this code)
