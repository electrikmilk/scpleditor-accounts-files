declare const identifier = "is.workflow.actions.image.crop";
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
        Description: string;
        Items: string[];
        Key: string;
        Label: string;
        Placeholder?: undefined;
        RequiredResources?: undefined;
        TextAlignment?: undefined;
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
        TextAlignment: string;
        DefaultValue?: undefined;
        Description?: undefined;
        Items?: undefined;
    } | {
        Class: string;
        DefaultValue: number;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        Description?: undefined;
        Items?: undefined;
        RequiredResources?: undefined;
    })[];
    SuggestedNever: boolean;
};
export { identifier, icon, WFAction };
