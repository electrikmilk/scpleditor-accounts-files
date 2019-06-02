declare const identifier = "is.workflow.actions.getrichtextfrommarkdown";
declare const icon = "RichText";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionInput: string;
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
    ShortName: string;
    SuggestedNever: boolean;
};
export { identifier, icon, WFAction };
