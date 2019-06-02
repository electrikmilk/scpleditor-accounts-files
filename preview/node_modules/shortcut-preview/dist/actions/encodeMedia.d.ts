declare const identifier = "is.workflow.actions.encodemedia";
declare const icon = "QuickTime";
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
        Items?: undefined;
        RequiredResources?: undefined;
        AllowsDecimalNumbers?: undefined;
        Description?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
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
        AllowsDecimalNumbers?: undefined;
        Description?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
        RequiredResources?: undefined;
        AllowsDecimalNumbers?: undefined;
        Description?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    } | {
        AllowsDecimalNumbers: boolean;
        Class: string;
        Description: string;
        Key: string;
        Label: string;
        Placeholder: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: string;
            WFResourceClass: string;
        }[];
        TextAlignment: string;
        DefaultValue?: undefined;
        Items?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        DefaultValue?: undefined;
        Items?: undefined;
        RequiredResources?: undefined;
        AllowsDecimalNumbers?: undefined;
        Description?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        TextAlignment: string;
        DefaultValue?: undefined;
        Items?: undefined;
        AllowsDecimalNumbers?: undefined;
        Description?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        DefaultValue?: undefined;
        Items?: undefined;
        AllowsDecimalNumbers?: undefined;
        Description?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    })[];
};
export { identifier, icon, WFAction };
