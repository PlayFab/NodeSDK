declare module PlayFabLocalizationModule {
    export interface IPlayFabLocalization {
        settings: PlayFabModule.IPlayFabSettings;
        // Retrieves the list of allowed languages, only accessible by title entities
        // https://docs.microsoft.com/rest/api/playfab/localization/localization/getlanguagelist
        GetLanguageList(
            request: PlayFabLocalizationModels.GetLanguageListRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabLocalizationModels.GetLanguageListResponse> | null,
        ): void;

    }
}

declare module PlayFabLocalizationModels {
    export interface GetLanguageListRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
    }

    export interface GetLanguageListResponse extends PlayFabModule.IPlayFabResultCommon {
        // The list of allowed languages, in BCP47 two-letter format
        LanguageList?: string[];
    }

}
