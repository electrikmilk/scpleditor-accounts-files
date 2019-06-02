declare const identifier = "is.workflow.actions.image.resize";
declare const icon = "Image";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
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
    LastModifiedDate: string;
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: ({
        Class: string;
        DefaultValue: number;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        DefaultValue?: undefined;
    })[];
};
export { identifier, icon, WFAction };
