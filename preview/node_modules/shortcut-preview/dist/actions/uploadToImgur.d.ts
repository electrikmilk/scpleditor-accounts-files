declare const identifier = "is.workflow.actions.imgur.upload";
declare const icon = "Imgur";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    CreationDate: string;
    Description: {
        DescriptionNote: string;
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
        Class: string;
        DefaultValue: boolean;
        Key: string;
        Label: string;
        Description?: undefined;
        RequiredResources?: undefined;
        Items?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        Description: string;
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        DefaultValue?: undefined;
        Items?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        DefaultValue: boolean;
        Description: string;
        Key: string;
        Label: string;
        RequiredResources?: undefined;
        Items?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        Description?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        DefaultValue?: undefined;
        Description?: undefined;
        RequiredResources?: undefined;
        Items?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Multiline: boolean;
        Placeholder: string;
        DefaultValue?: undefined;
        Description?: undefined;
        RequiredResources?: undefined;
        Items?: undefined;
        TextAlignment?: undefined;
    })[];
    RequiredResources: {
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        WFAccountClass: string;
        WFResourceClass: string;
    }[];
};
export { identifier, icon, WFAction };
