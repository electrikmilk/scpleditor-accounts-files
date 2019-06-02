declare const identifier = "is.workflow.actions.openxcallbackurl";
declare const icon = "URL";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
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
        Description: string;
        Key: string;
        Label: string;
        DefaultValue?: undefined;
        KeyboardType?: undefined;
        RequiredResources?: undefined;
        Placeholder?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Key: string;
        KeyboardType: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        Description?: undefined;
        Placeholder?: undefined;
    } | {
        Class: string;
        Key: string;
        KeyboardType: string;
        Label: string;
        Placeholder: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        Description?: undefined;
        DefaultValue?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Description: string;
        Key: string;
        KeyboardType: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        Placeholder?: undefined;
    })[];
    RequiredResources: string[];
    ShortName: string;
    UnsupportedEnvironments: string[];
};
export { identifier, icon, WFAction };
