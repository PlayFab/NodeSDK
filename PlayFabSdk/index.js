// main.js not intended for public consumption, it just loads all the required files for npm package

var PlayFab = require('./Scripts/PlayFab/PlayFab.js');
var PlayFabAdmin = require('./Scripts/PlayFab/PlayFabAdmin.js');
var PlayFabMatchmaker = require('./Scripts/PlayFab/PlayFabMatchmaker.js');
var PlayFabClient = require('./Scripts/PlayFab/PlayFabClient.js');
var PlayFabServer = require('./Scripts/PlayFab/PlayFabServer.js');

exports = {
    PlayFab : PlayFab,
    PlayFabAdmin : PlayFabAdmin,
    PlayFabMatchmaker : PlayFabMatchmaker,
    PlayFabClient : PlayFabClient,
    PlayFabServer : PlayFabServer,
    get settings() {
        return PlayFab.settings;
    },
    set settings(value) {
        Object.assign(PlayFab.settings,value);
    }
};