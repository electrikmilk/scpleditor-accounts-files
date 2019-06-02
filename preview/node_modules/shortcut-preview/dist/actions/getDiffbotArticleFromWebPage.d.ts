declare const identifier = "is.workflow.actions.getarticle";
declare const icon = "DownloadArticle";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    CoercionItemClass: string;
    CreationDate: string;
    Description: {
        DescriptionNote: string;
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Required: boolean;
        Types: string[];
    };
    InputPassthrough: boolean;
    Name: string;
    Output: {
        OutputName: string;
        Types: string[];
    };
    ShortName: string;
};
export { identifier, icon, WFAction };
