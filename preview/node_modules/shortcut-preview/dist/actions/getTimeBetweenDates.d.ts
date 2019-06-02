declare const identifier = "is.workflow.actions.gettimebetweendates";
declare const icon = "Date";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    CreationDate: string;
    Description: {
        DescriptionNote: string;
        DescriptionSummary: string;
    };
    Input: {
        Required: boolean;
        Types: string[];
    };
    InputPassthrough: boolean;
    Name: string;
    Output: {
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
    })[];
    ShortName: string;
};
export { identifier, icon, WFAction };
