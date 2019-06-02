declare const identifier = "is.workflow.actions.weather.currentconditions";
declare const icon = "Weather";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    Description: {
        DescriptionAttribution: {
            Description: string;
            Link: {
                Text: string;
                URL: string;
            };
        };
        DescriptionSummary: string;
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
        DefaultValue: string;
        DisallowedVariableTypes: string[];
        Items: string[];
        Key: string;
        Label: string;
        HintDisplayMode?: undefined;
        Placeholder?: undefined;
        RequiredResources?: undefined;
        TextAlignment?: undefined;
    } | {
        Class: string;
        HintDisplayMode: string;
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
    RequiredResources: string[];
    UnsupportedEnvironments: string[];
};
export { identifier, icon, WFAction };
