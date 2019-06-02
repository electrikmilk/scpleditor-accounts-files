declare const identifier = "is.workflow.actions.text.replace";
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
    InputPassthrough: boolean;
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: ({
        Class: string;
        Description: string;
        Key: string;
        Label: string;
        Placeholder: string;
        DefaultValue?: undefined;
    } | {
        Class: string;
        DefaultValue: boolean;
        Description: string;
        Key: string;
        Label: string;
        Placeholder?: undefined;
    })[];
};
export { identifier, icon, WFAction };
