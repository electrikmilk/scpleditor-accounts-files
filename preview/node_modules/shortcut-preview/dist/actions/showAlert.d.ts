declare const identifier = "is.workflow.actions.alert";
declare const icon = "Scripting";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionSummary: string;
    };
    InputPassthrough: boolean;
    Name: string;
    Parameters: ({
        Class: string;
        DefaultValue: string;
        DisallowedVariableTypes: string[];
        Key: string;
        Label: string;
        Placeholder: string;
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
        DisallowedVariableTypes: string[];
        Key: string;
        Label: string;
        Placeholder?: undefined;
        Multiline?: undefined;
    })[];
    RequiredResources: string[];
};
export { identifier, icon, WFAction };
