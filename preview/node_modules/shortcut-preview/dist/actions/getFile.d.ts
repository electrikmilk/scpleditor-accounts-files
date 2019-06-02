declare const identifier = "is.workflow.actions.documentpicker.open";
declare const icon = "Documents";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionNote: string;
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
        AlwaysShowsButton: boolean;
        Class: string;
        Key: string;
        Label: string;
        DefaultValue?: undefined;
        RequiredResources?: undefined;
        AutocapitalizationType?: undefined;
        Description?: undefined;
        DisableAutocorrection?: undefined;
        KeyboardType?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    } | {
        Class: string;
        DefaultValue: boolean;
        Key: string;
        Label: string;
        AlwaysShowsButton?: undefined;
        RequiredResources?: undefined;
        AutocapitalizationType?: undefined;
        Description?: undefined;
        DisableAutocorrection?: undefined;
        KeyboardType?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    } | {
        Class: string;
        DefaultValue: boolean;
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        AlwaysShowsButton?: undefined;
        AutocapitalizationType?: undefined;
        Description?: undefined;
        DisableAutocorrection?: undefined;
        KeyboardType?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    } | {
        AutocapitalizationType: string;
        Class: string;
        Description: string;
        DisableAutocorrection: boolean;
        Key: string;
        KeyboardType: string;
        Label: string;
        Placeholder: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        TextAlignment: string;
        AlwaysShowsButton?: undefined;
        DefaultValue?: undefined;
    } | {
        AutocapitalizationType: string;
        Class: string;
        DisableAutocorrection: boolean;
        Key: string;
        KeyboardType: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        AlwaysShowsButton?: undefined;
        DefaultValue?: undefined;
        RequiredResources?: undefined;
        Description?: undefined;
    })[];
    RequiredResources: {
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        WFResourceClass: string;
    }[];
    UserInterfaces: string[];
};
export { identifier, icon, WFAction };
