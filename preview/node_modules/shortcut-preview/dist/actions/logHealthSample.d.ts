declare const identifier = "is.workflow.actions.health.quantity.log";
declare const icon = "Health";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    CreationDate: string;
    Description: {
        DescriptionSummary: string;
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
        DisallowedVariableTypes: string[];
        Key: string;
        Label: string;
        AutocapitalizationType?: undefined;
        KeyboardType?: undefined;
        Placeholder?: undefined;
        QuantityTypeKey?: undefined;
        TextAlignment?: undefined;
        Description?: undefined;
    } | {
        AutocapitalizationType: string;
        Class: string;
        Key: string;
        KeyboardType: string;
        Label: string;
        Placeholder: string;
        QuantityTypeKey: string;
        TextAlignment: string;
        DisallowedVariableTypes?: undefined;
        Description?: undefined;
    } | {
        AutocapitalizationType: string;
        Class: string;
        Key: string;
        KeyboardType: string;
        Placeholder: string;
        QuantityTypeKey: string;
        TextAlignment: string;
        DisallowedVariableTypes?: undefined;
        Label?: undefined;
        Description?: undefined;
    } | {
        Class: string;
        Description: string;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        DisallowedVariableTypes?: undefined;
        AutocapitalizationType?: undefined;
        KeyboardType?: undefined;
        QuantityTypeKey?: undefined;
    })[];
    RequiredResources: (string | {
        AccessType: string;
        ReadableObjectTypeIdentifierParameterKey: string;
        ReadableType: string;
        WFResourceClass: string;
    })[];
};
export { identifier, icon, WFAction };
