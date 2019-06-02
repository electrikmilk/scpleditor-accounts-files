declare const identifier = "is.workflow.actions.url.getheaders";
declare const icon = "Downloads";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    CreationDate: string;
    Description: {
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
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    ShortName: string;
    SuggestedNever: boolean;
};
export { identifier, icon, WFAction };
