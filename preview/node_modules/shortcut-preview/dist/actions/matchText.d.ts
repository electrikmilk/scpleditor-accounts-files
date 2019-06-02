declare const identifier = "is.workflow.actions.text.match";
declare const icon = "Text";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionResult: string;
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
        DefaultValue: string;
        Key: string;
        Label: string;
        Description?: undefined;
    } | {
        Class: string;
        DefaultValue: boolean;
        Description: string;
        Key: string;
        Label: string;
    })[];
};
export { identifier, icon, WFAction };
