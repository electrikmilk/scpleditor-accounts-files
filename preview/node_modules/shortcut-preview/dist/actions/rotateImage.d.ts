declare const identifier = "is.workflow.actions.image.rotate";
declare const icon = "Image";
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
    InputPassthrough: boolean;
    LastModifiedDate: string;
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: {
        AllowsDecimalNumbers: boolean;
        Class: string;
        DefaultValue: number;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
    }[];
    SuggestedNever: boolean;
};
export { identifier, icon, WFAction };
