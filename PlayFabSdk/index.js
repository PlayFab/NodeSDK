var PlayFab = require("./Scripts/PlayFab/PlayFab.js");

var PlayFabAdmin = require("./Scripts/PlayFab/PlayFabAdmin.js");
var PlayFabClient = require("./Scripts/PlayFab/PlayFabClient.js");
var PlayFabEntity = require("./Scripts/PlayFab/PlayFabEntity.js");
var PlayFabMatchmaker = require("./Scripts/PlayFab/PlayFabMatchmaker.js");
var PlayFabServer = require("./Scripts/PlayFab/PlayFabServer.js");

module.exports = {
    PlayFab : PlayFab,
    PlayFabAdmin : PlayFabAdmin,
    PlayFabClient : PlayFabClient,
    PlayFabEntity : PlayFabEntity,
    PlayFabMatchmaker : PlayFabMatchmaker,
    PlayFabServer : PlayFabServer,
    get settings() {
        return PlayFab.settings;
    },
    set settings(value) {
        Object.assign(PlayFab.settings,value);
    }
};
