declare const identifier = "is.workflow.actions.file.append";
declare const icon = "Documents";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    CreationDate: string;
    Description: {
        DescriptionNote: string;
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
        AlwaysRequiresServiceResource: boolean;
        AlwaysShowsButton: boolean;
        Class: string;
        Key: string;
        Label: string;
        AutocapitalizationType?: undefined;
        Description?: undefined;
        DisableAutocorrection?: undefined;
        KeyboardType?: undefined;
        Placeholder?: undefined;
        Prefix?: undefined;
        TextAlignment?: undefined;
        DefaultValue?: undefined;
        Items?: undefined;
    } | {
        AutocapitalizationType: string;
        Class: string;
        Description: string;
        DisableAutocorrection: boolean;
        Key: string;
        KeyboardType: string;
        Label: string;
        Placeholder: string;
        Prefix: string;
        TextAlignment: string;
        AlwaysRequiresServiceResource?: undefined;
        AlwaysShowsButton?: undefined;
        DefaultValue?: undefined;
        Items?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
        AlwaysRequiresServiceResource?: undefined;
        AlwaysShowsButton?: undefined;
        AutocapitalizationType?: undefined;
        Description?: undefined;
        DisableAutocorrection?: undefined;
        KeyboardType?: undefined;
        Placeholder?: undefined;
        Prefix?: undefined;
        TextAlignment?: undefined;
    } | {
        Class: string;
        DefaultValue: boolean;
        Key: string;
        Label: string;
        AlwaysRequiresServiceResource?: undefined;
        AlwaysShowsButton?: undefined;
        AutocapitalizationType?: undefined;
        Description?: undefined;
        DisableAutocorrection?: undefined;
        KeyboardType?: undefined;
        Placeholder?: undefined;
        Prefix?: undefined;
        TextAlignment?: undefined;
        Items?: undefined;
    })[];
    ShortName: string;
};
export { identifier, icon, WFAction };
