declare const identifier = "is.workflow.actions.venmo.request";
declare const icon = "ApplePay";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionSummary: string;
    };
    InputPassthrough: boolean;
    IntentIdentifier: string;
    Name: string;
    Parameters: ({
        Class: string;
        DefaultValue: string;
        DisallowedVariableTypes: string[];
        IntentName: string;
        Key: string;
        Label: string;
        IntentSlotName?: undefined;
        Placeholder?: undefined;
        AllowsDecimalNumbers?: undefined;
        TextAlignment?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        IntentSlotName: string;
        Key: string;
        Label: string;
        Placeholder: string;
        DefaultValue?: undefined;
        DisallowedVariableTypes?: undefined;
        IntentName?: undefined;
        AllowsDecimalNumbers?: undefined;
        TextAlignment?: undefined;
        Multiline?: undefined;
    } | {
        AllowsDecimalNumbers: boolean;
        Class: string;
        IntentSlotName: string;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        DefaultValue?: undefined;
        DisallowedVariableTypes?: undefined;
        IntentName?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        DefaultValue: boolean;
        Key: string;
        Label: string;
        DisallowedVariableTypes?: undefined;
        IntentName?: undefined;
        IntentSlotName?: undefined;
        Placeholder?: undefined;
        AllowsDecimalNumbers?: undefined;
        TextAlignment?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        IntentSlotName: string;
        Key: string;
        Label: string;
        Multiline: boolean;
        Placeholder: string;
        DefaultValue?: undefined;
        DisallowedVariableTypes?: undefined;
        IntentName?: undefined;
        AllowsDecimalNumbers?: undefined;
        TextAlignment?: undefined;
    })[];
    RequiredResources: string[];
};
export { identifier, icon, WFAction };
