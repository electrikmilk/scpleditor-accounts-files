declare const identifier = "is.workflow.actions.wordpress.post";
declare const icon = "WordPress";
declare const WFAction: {
    ActionClass: string;
    AppIdentifier: string;
    CreationDate: string;
    Description: {
        DescriptionResult: string;
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Required: boolean;
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
        AccountClass: string;
        Class: string;
        DisallowedVariableTypes: string[];
        Key: string;
        Label: string;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        RequiredResources?: undefined;
    } | {
        Class: string;
        DisallowedVariableTypes: string[];
        Key: string;
        Label: string;
        AccountClass?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        RequiredResources?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        AccountClass?: undefined;
        DisallowedVariableTypes?: undefined;
        RequiredResources?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        AccountClass?: undefined;
        DisallowedVariableTypes?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        RequiredResources?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        AccountClass?: undefined;
        DisallowedVariableTypes?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        TextAlignment: string;
        AccountClass?: undefined;
        DisallowedVariableTypes?: undefined;
    })[];
    RequiredResources: {
        WFAccountClass: string;
        WFResourceClass: string;
    }[];
};
export { identifier, icon, WFAction };
