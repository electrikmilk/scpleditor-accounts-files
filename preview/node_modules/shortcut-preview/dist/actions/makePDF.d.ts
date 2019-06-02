declare const identifier = "is.workflow.actions.makepdf";
declare const icon = "PDF";
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
        AllowsDecimalNumbers?: undefined;
        Placeholder?: undefined;
        RequiredResources?: undefined;
        TextAlignment?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
        AllowsDecimalNumbers?: undefined;
        Placeholder?: undefined;
        RequiredResources?: undefined;
        TextAlignment?: undefined;
    } | {
        AllowsDecimalNumbers: boolean;
        Class: string;
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
    })[];
    UnsupportedEnvironments: string[];
};
export { identifier, icon, WFAction };
