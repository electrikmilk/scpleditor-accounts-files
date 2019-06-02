declare const identifier = "is.workflow.actions.correctspelling";
declare const icon = "Text";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Required: boolean;
        Types: string[];
    };
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    SuggestedNever: boolean;
};
export { identifier, icon, WFAction };
