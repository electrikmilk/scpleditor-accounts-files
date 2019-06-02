declare const identifier = "is.workflow.actions.overlayimageonimage";
declare const icon = "Image";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    CreationDate: string;
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
    InputPassthrough: boolean;
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
        DefaultValue?: undefined;
        Items?: undefined;
        RequiredResources?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        AllowsDecimalNumbers?: undefined;
    } | {
        Class: string;
        DefaultValue: boolean;
        Key: string;
        Label: string;
        Items?: undefined;
        RequiredResources?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        AllowsDecimalNumbers?: undefined;
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
        Placeholder?: undefined;
        TextAlignment?: undefined;
        AllowsDecimalNumbers?: undefined;
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
    } | {
        AllowsDecimalNumbers: boolean;
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        RequiredResources: ({
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        } | {
            WFParameterKey: string;
            WFParameterValue: string;
            WFResourceClass: string;
        })[];
        TextAlignment: string;
        DefaultValue?: undefined;
        Items?: undefined;
    } | {
        AllowsDecimalNumbers: boolean;
        Class: string;
        DefaultValue: number;
        Key: string;
        Label: string;
        Placeholder: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        TextAlignment: string;
        Items?: undefined;
    } | {
        Class: string;
        DefaultValue: number;
        Key: string;
        Label: string;
        Placeholder: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        TextAlignment: string;
        Items?: undefined;
        AllowsDecimalNumbers?: undefined;
    })[];
    RequiredResources: {
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        WFResourceClass: string;
    }[];
    UnsupportedEnvironments: string[];
    UserInterfaces: string[];
};
export { identifier, icon, WFAction };
