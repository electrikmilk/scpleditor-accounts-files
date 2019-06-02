declare const identifier = "is.workflow.actions.choosefromlist";
declare const icon = "Scripting";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    CreationDate: string;
    Description: {
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Required: boolean;
        TypePassthrough: boolean;
        Types: string[];
    };
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
        Description: string;
        DisallowedVariableTypes: string[];
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        RequiredResources?: undefined;
    } | {
        Class: string;
        DefaultValue: boolean;
        Description: string;
        Key: string;
        Label: string;
        DisallowedVariableTypes?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        RequiredResources?: undefined;
    } | {
        Class: string;
        DefaultValue: boolean;
        Description: string;
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        DisallowedVariableTypes?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    })[];
    RequiredResources: string[];
    UserInterfaces: string[];
};
export { identifier, icon, WFAction };
