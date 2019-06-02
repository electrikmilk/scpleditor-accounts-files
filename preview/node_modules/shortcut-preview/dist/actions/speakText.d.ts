declare const identifier = "is.workflow.actions.speaktext";
declare const icon = "Sound";
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
        Types: string[];
    };
    InputPassthrough: boolean;
    LastModifiedDate: string;
    Name: string;
    Parameters: ({
        Class: string;
        DefaultValue: boolean;
        Key: string;
        Label: string;
        MaximumValue?: undefined;
        MinimumValue?: undefined;
        AlwaysShowsButton?: undefined;
        DisallowedVariableTypes?: undefined;
        RequiredResources?: undefined;
        WFSpeakTextLanguageKey?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        DefaultValue?: undefined;
        MaximumValue?: undefined;
        MinimumValue?: undefined;
        AlwaysShowsButton?: undefined;
        DisallowedVariableTypes?: undefined;
        RequiredResources?: undefined;
        WFSpeakTextLanguageKey?: undefined;
    } | {
        Class: string;
        DefaultValue: number;
        Key: string;
        Label: string;
        MaximumValue: number;
        MinimumValue: number;
        AlwaysShowsButton?: undefined;
        DisallowedVariableTypes?: undefined;
        RequiredResources?: undefined;
        WFSpeakTextLanguageKey?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Key: string;
        Label: string;
        MaximumValue?: undefined;
        MinimumValue?: undefined;
        AlwaysShowsButton?: undefined;
        DisallowedVariableTypes?: undefined;
        RequiredResources?: undefined;
        WFSpeakTextLanguageKey?: undefined;
    } | {
        AlwaysShowsButton: boolean;
        Class: string;
        DefaultValue: string;
        DisallowedVariableTypes: string[];
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterRelation: string;
            WFResourceClass: string;
        }[];
        WFSpeakTextLanguageKey: string;
        MaximumValue?: undefined;
        MinimumValue?: undefined;
    })[];
};
export { identifier, icon, WFAction };
