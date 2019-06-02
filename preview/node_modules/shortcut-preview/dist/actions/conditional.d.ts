declare const identifier = "is.workflow.actions.conditional";
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
    Parameters: ({
        Class: string;
        DefaultValue: string;
        DisallowedVariableTypes: string[];
        Items: string[];
        Key: string;
        Label: string;
        AllowsDecimalNumbers?: undefined;
        Placeholder?: undefined;
        RequiredResources?: undefined;
        TextAlignment?: undefined;
    } | {
        AllowsDecimalNumbers: boolean;
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValues: string[];
            WFResourceClass: string;
        }[];
        TextAlignment: string;
        DefaultValue?: undefined;
        DisallowedVariableTypes?: undefined;
        Items?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Key: string;
        Label: string;
        Placeholder: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValues: string[];
            WFResourceClass: string;
        }[];
        TextAlignment: string;
        DisallowedVariableTypes?: undefined;
        Items?: undefined;
        AllowsDecimalNumbers?: undefined;
    })[];
    SettingsUI: {
        ViewControllerClass: string;
    };
};
export { identifier, icon, WFAction };
