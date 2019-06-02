declare const identifier = "is.workflow.actions.getdistance";
declare const icon = "Maps";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    CreationDate: string;
    Description: {
        DescriptionInput: string;
        DescriptionResult: string;
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Required: boolean;
        Types: string[];
    };
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: ({
        Class: string;
        DefaultValue: string;
        DisallowedVariableTypes: string[];
        Items: string[];
        Key: string;
        Label: string;
        Placeholder?: undefined;
        RequiredResources?: undefined;
        TextAlignment?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: string;
            WFResourceClass: string;
        }[];
        TextAlignment: string;
        DefaultValue?: undefined;
        DisallowedVariableTypes?: undefined;
        Items?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
        DisallowedVariableTypes?: undefined;
        Placeholder?: undefined;
        RequiredResources?: undefined;
        TextAlignment?: undefined;
    } | {
        Class: string;
        Items: string[];
        Key: string;
        Label: string;
        DefaultValue?: undefined;
        DisallowedVariableTypes?: undefined;
        Placeholder?: undefined;
        RequiredResources?: undefined;
        TextAlignment?: undefined;
    })[];
    RequiredResources: string[];
    UnsupportedEnvironments: string[];
};
export { identifier, icon, WFAction };
