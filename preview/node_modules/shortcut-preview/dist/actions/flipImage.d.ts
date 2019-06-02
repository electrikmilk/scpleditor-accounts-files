declare const identifier = "is.workflow.actions.image.flip";
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
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
    }[];
    SuggestedNever: boolean;
};
export { identifier, icon, WFAction };
