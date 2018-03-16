var PlayFab = require("./Scripts/PlayFab/PlayFab.js");

var PlayFabAdmin = require("./Scripts/PlayFab/PlayFabAdmin.js");
var PlayFabMatchmaker = require("./Scripts/PlayFab/PlayFabMatchmaker.js");
var PlayFabServer = require("./Scripts/PlayFab/PlayFabServer.js");
var PlayFabClient = require("./Scripts/PlayFab/PlayFabClient.js");
var PlayFabEntity = require("./Scripts/PlayFab/PlayFabEntity.js");

module.exports = {
    PlayFab : PlayFab,
    PlayFabAdmin : PlayFabAdmin,
    PlayFabMatchmaker : PlayFabMatchmaker,
    PlayFabServer : PlayFabServer,
    PlayFabClient : PlayFabClient,
    PlayFabEntity : PlayFabEntity,
    get settings() {
        return PlayFab.settings;
    },
    set settings(value) {
        Object.assign(PlayFab.settings,value);
    }
};
