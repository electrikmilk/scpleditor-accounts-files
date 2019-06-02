declare const identifier = "is.workflow.actions.tumblr.post";
declare const icon = "Tumblr";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    CreationDate: string;
    Description: {
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
        Class: string;
        Key: string;
        Label: string;
        Description?: undefined;
        RequiredResources?: undefined;
        DefaultValue?: undefined;
        Items?: undefined;
        Placeholder?: undefined;
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
        Multiline?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
        Description?: undefined;
        RequiredResources?: undefined;
        Placeholder?: undefined;
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
        Multiline?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: string;
            WFResourceClass: string;
        }[];
        Description?: undefined;
        DefaultValue?: undefined;
        Items?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        RequiredResources: ({
            WFParameterKey: string;
            WFParameterValues: string[];
            WFResourceClass: string;
            WFParameterValue?: undefined;
        } | {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
            WFParameterValues?: undefined;
        })[];
        Description?: undefined;
        DefaultValue?: undefined;
        Items?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        Description?: undefined;
        RequiredResources?: undefined;
        DefaultValue?: undefined;
        Items?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Multiline: boolean;
        Placeholder: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: string;
            WFResourceClass: string;
        }[];
        Description?: undefined;
        DefaultValue?: undefined;
        Items?: undefined;
    })[];
    RequiredResources: ({
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        WFResourceClass: string;
        AppIdentifier?: undefined;
    } | {
        AppIdentifier: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        WFResourceClass: string;
    })[];
};
export { identifier, icon, WFAction };
