var PlayFab = require("./Scripts/PlayFab/PlayFab.js");

var PlayFabAdmin = require("./Scripts/PlayFab/PlayFabAdmin.js");
var PlayFabClient = require("./Scripts/PlayFab/PlayFabClient.js");
var PlayFabServer = require("./Scripts/PlayFab/PlayFabServer.js");
var PlayFabAuthentication = require("./Scripts/PlayFab/PlayFabAuthentication.js");
var PlayFabCloudScript = require("./Scripts/PlayFab/PlayFabCloudScript.js");
var PlayFabData = require("./Scripts/PlayFab/PlayFabData.js");
var PlayFabEconomy = require("./Scripts/PlayFab/PlayFabEconomy.js");
var PlayFabEvents = require("./Scripts/PlayFab/PlayFabEvents.js");
var PlayFabExperimentation = require("./Scripts/PlayFab/PlayFabExperimentation.js");
var PlayFabInsights = require("./Scripts/PlayFab/PlayFabInsights.js");
var PlayFabGroups = require("./Scripts/PlayFab/PlayFabGroups.js");
var PlayFabLeaderboards = require("./Scripts/PlayFab/PlayFabLeaderboards.js");
var PlayFabLocalization = require("./Scripts/PlayFab/PlayFabLocalization.js");
var PlayFabMultiplayer = require("./Scripts/PlayFab/PlayFabMultiplayer.js");
var PlayFabProfiles = require("./Scripts/PlayFab/PlayFabProfiles.js");

module.exports = {
    PlayFab : PlayFab,
    PlayFabAdmin : PlayFabAdmin,
    PlayFabClient : PlayFabClient,
    PlayFabServer : PlayFabServer,
    PlayFabAuthentication : PlayFabAuthentication,
    PlayFabCloudScript : PlayFabCloudScript,
    PlayFabData : PlayFabData,
    PlayFabEconomy : PlayFabEconomy,
    PlayFabEvents : PlayFabEvents,
    PlayFabExperimentation : PlayFabExperimentation,
    PlayFabInsights : PlayFabInsights,
    PlayFabGroups : PlayFabGroups,
    PlayFabLeaderboards : PlayFabLeaderboards,
    PlayFabLocalization : PlayFabLocalization,
    PlayFabMultiplayer : PlayFabMultiplayer,
    PlayFabProfiles : PlayFabProfiles,
    get settings() {
        return PlayFab.settings;
    },
    set settings(value) {
        Object.assign(PlayFab.settings,value);
    }
};
