declare const identifier = "is.workflow.actions.notification";
declare const icon = "Notification";
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
    InputPassthrough: boolean;
    LastModifiedDate: string;
    Name: string;
    Parameters: ({
        Class: string;
        DisallowedVariableTypes: string[];
        Key: string;
        Label: string;
        Placeholder: string;
        DefaultValue?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        DisallowedVariableTypes: string[];
        Key: string;
        Label: string;
        Multiline: boolean;
        Placeholder: string;
    } | {
        Class: string;
        DefaultValue: boolean;
        Key: string;
        Label: string;
        DisallowedVariableTypes?: undefined;
        Placeholder?: undefined;
        Multiline?: undefined;
    })[];
    RequiredResources: string[];
    UserInterfaces: string[];
};
export { identifier, icon, WFAction };
