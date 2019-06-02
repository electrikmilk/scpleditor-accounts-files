declare const identifier = "is.workflow.actions.runsshscript";
declare const icon = "Scripting";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
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
    LastModifiedDate: string;
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: ({
        AutocapitalizationType: string;
        Class: string;
        DisableAutocorrection: boolean;
        Key: string;
        KeyboardType: string;
        Label: string;
        Placeholder: string;
        TextContentType: string;
        DefaultValue?: undefined;
        DoNotLocalizeValues?: undefined;
        SecureTextInput?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Key: string;
        KeyboardType: string;
        Label: string;
        Placeholder: string;
        AutocapitalizationType?: undefined;
        DisableAutocorrection?: undefined;
        TextContentType?: undefined;
        DoNotLocalizeValues?: undefined;
        SecureTextInput?: undefined;
        Multiline?: undefined;
    } | {
        AutocapitalizationType: string;
        Class: string;
        DisableAutocorrection: boolean;
        DoNotLocalizeValues: boolean;
        Key: string;
        Label: string;
        Placeholder: string;
        TextContentType: string;
        KeyboardType?: undefined;
        DefaultValue?: undefined;
        SecureTextInput?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        SecureTextInput: boolean;
        TextContentType: string;
        AutocapitalizationType?: undefined;
        DisableAutocorrection?: undefined;
        KeyboardType?: undefined;
        DefaultValue?: undefined;
        DoNotLocalizeValues?: undefined;
        Multiline?: undefined;
    } | {
        AutocapitalizationType: string;
        Class: string;
        DisableAutocorrection: boolean;
        Key: string;
        Label: string;
        Multiline: boolean;
        Placeholder: string;
        KeyboardType?: undefined;
        TextContentType?: undefined;
        DefaultValue?: undefined;
        DoNotLocalizeValues?: undefined;
        SecureTextInput?: undefined;
    })[];
    ShortName: string;
    SuggestedNever: boolean;
};
export { identifier, icon, WFAction };
