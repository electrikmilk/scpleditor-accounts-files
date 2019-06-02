declare const identifier = "is.workflow.actions.sendemail";
declare const icon = "Mail";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
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
        AlwaysShowsButton?: undefined;
        RequiredResources?: undefined;
        AutocapitalizationType?: undefined;
        Description?: undefined;
        DisableAutocorrection?: undefined;
        KeyboardType?: undefined;
        Placeholder?: undefined;
        TextContentType?: undefined;
    } | {
        AlwaysShowsButton: boolean;
        Class: string;
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        DefaultValue?: undefined;
        AutocapitalizationType?: undefined;
        Description?: undefined;
        DisableAutocorrection?: undefined;
        KeyboardType?: undefined;
        Placeholder?: undefined;
        TextContentType?: undefined;
    } | {
        AutocapitalizationType: string;
        Class: string;
        Description: string;
        DisableAutocorrection: boolean;
        Key: string;
        KeyboardType: string;
        Label: string;
        Placeholder: string;
        RequiredResources: ({
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
            WFDeviceAttributes?: undefined;
        } | {
            WFDeviceAttributes: {
                WFDeviceAttributeSystemVersion: {
                    WFSystemVersion: string;
                    WFSystemVersionRelation: string;
                };
            };
            WFResourceClass: string;
            WFParameterKey?: undefined;
            WFParameterValue?: undefined;
        })[];
        TextContentType: string;
        DefaultValue?: undefined;
        AlwaysShowsButton?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        DefaultValue?: undefined;
        AlwaysShowsButton?: undefined;
        RequiredResources?: undefined;
        AutocapitalizationType?: undefined;
        Description?: undefined;
        DisableAutocorrection?: undefined;
        KeyboardType?: undefined;
        TextContentType?: undefined;
    })[];
    RequiredResources: ({
        RequiredResources: {
            WFResourceClass: string;
            WFWorkflowType: string;
        }[];
        WFResourceClass: string;
    } | {
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        WFResourceClass: string;
    })[];
    SettingsUI: {
        ShowWhenResourcesUnavailable: boolean;
        ViewControllerClass: string;
    };
    SuggestedAsInitialAction: boolean;
    UserInterfaces: string[];
};
export { identifier, icon, WFAction };
