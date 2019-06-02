declare const identifier = "is.workflow.actions.documentpicker.save";
declare const icon = "Documents";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
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
        AutocapitalizationType?: undefined;
        Description?: undefined;
        DisableAutocorrection?: undefined;
        RequiredResources?: undefined;
        TextAlignment?: undefined;
    } | {
        Class: string;
        DefaultValue: boolean;
        Key: string;
        Label: string;
        AlwaysShowsButton?: undefined;
        AutocapitalizationType?: undefined;
        Description?: undefined;
        DisableAutocorrection?: undefined;
        RequiredResources?: undefined;
        TextAlignment?: undefined;
    } | {
        AutocapitalizationType: string;
        Class: string;
        Description: string;
        DisableAutocorrection: boolean;
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        TextAlignment: string;
        AlwaysShowsButton?: undefined;
        DefaultValue?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        AlwaysShowsButton?: undefined;
        DefaultValue?: undefined;
        AutocapitalizationType?: undefined;
        Description?: undefined;
        DisableAutocorrection?: undefined;
        TextAlignment?: undefined;
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
