declare const identifier = "is.workflow.actions.image.combine";
declare const icon = "Image";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    CreationDate: string;
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
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
        Description?: undefined;
        RequiredResources?: undefined;
        AllowsDecimalNumbers?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Description: string;
        Items: string[];
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: string;
            WFResourceClass: string;
        }[];
        AllowsDecimalNumbers?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    } | {
        AllowsDecimalNumbers: boolean;
        Class: string;
        DefaultValue: number;
        Description: string;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        Items?: undefined;
        RequiredResources?: undefined;
    })[];
};
export { identifier, icon, WFAction };
