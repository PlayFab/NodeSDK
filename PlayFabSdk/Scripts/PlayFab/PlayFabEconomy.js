/// <reference path="../typings/PlayFab/PlayFabEconomy.d.ts" />

var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

exports.CreateDraftItem = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/CreateDraftItem",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.CreateUploadUrls = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/CreateUploadUrls",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.DeleteEntityItemReviews = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/DeleteEntityItemReviews",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.DeleteItem = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/DeleteItem",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetCatalogConfig = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/GetCatalogConfig",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetDraftItem = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/GetDraftItem",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetDraftItems = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/GetDraftItems",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetEntityDraftItems = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/GetEntityDraftItems",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetEntityItemReview = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/GetEntityItemReview",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetItem = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/GetItem",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetItemModerationState = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/GetItemModerationState",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetItemPublishStatus = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/GetItemPublishStatus",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetItemReviews = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/GetItemReviews",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetItemReviewSummary = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/GetItemReviewSummary",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetItems = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/GetItems",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.PublishDraftItem = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/PublishDraftItem",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ReportItem = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/ReportItem",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ReportItemReview = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/ReportItemReview",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ReviewItem = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/ReviewItem",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.SearchItems = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/SearchItems",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.SetItemModerationState = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/SetItemModerationState",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.SubmitItemReviewVote = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/SubmitItemReviewVote",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.TakedownItemReviews = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/TakedownItemReviews",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UpdateCatalogConfig = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/UpdateCatalogConfig",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UpdateDraftItem = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Catalog/UpdateDraftItem",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

