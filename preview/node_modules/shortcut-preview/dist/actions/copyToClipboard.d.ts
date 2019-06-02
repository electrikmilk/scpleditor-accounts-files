declare const identifier = "is.workflow.actions.setclipboard";
declare const icon = "Clipboard";
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
    Parameters: ({
        Class: string;
        DefaultValue: boolean;
        Description: string;
        Key: string;
        Label: string;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    } | {
        Class: string;
        Description: string;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        DefaultValue?: undefined;
    })[];
    RequiredResources: string[];
    ShortName: string;
};
export { identifier, icon, WFAction };
