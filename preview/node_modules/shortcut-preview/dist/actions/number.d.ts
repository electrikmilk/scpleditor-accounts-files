declare const identifier = "is.workflow.actions.number";
declare const icon = "Calculator";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionSummary: string;
    };
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: {
        AllowsDecimalNumbers: boolean;
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
    }[];
    SuggestedNever: boolean;
};
export { identifier, icon, WFAction };
