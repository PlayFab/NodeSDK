declare module 'index' {
    export interface IPlayFabContainer {
        PlayFab : PlayFabModule.IPlayFab;
        PlayFabAdmin : PlayFabAdminModule.IPlayFabAdmin;
        PlayFabMatchmaker : PlayFabMatchmakerModule.IPlayFabMatchmaker;
        PlayFabClient : PlayFabClientModule.IPlayFabClient;
        PlayFabServer : PlayFabServerModule.IPlayFabServer;
        settings: PlayFabModule.IPlayFabSettings;
    }
}
