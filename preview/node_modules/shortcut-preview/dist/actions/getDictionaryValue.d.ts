declare const identifier = "is.workflow.actions.getvalueforkey";
declare const icon = "Scripting";
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
        AutocapitalizationType?: undefined;
        DisableAutocorrection?: undefined;
        Placeholder?: undefined;
        RequiredResources?: undefined;
        TextAlignment?: undefined;
    } | {
        AutocapitalizationType: string;
        Class: string;
        DisableAutocorrection: boolean;
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
    })[];
};
export { identifier, icon, WFAction };
