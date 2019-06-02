declare const identifier = "is.workflow.actions.searchlocalbusinesses";
declare const icon = "Maps";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    CreationDate: string;
    Description: {
        DescriptionInput: string;
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
        Placeholder: string;
        TextAlignment: string;
        AllowsDecimalNumbers?: undefined;
        DefaultValue?: undefined;
    } | {
        AllowsDecimalNumbers: boolean;
        Class: string;
        DefaultValue: number;
        Description: string;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
    })[];
    RequiredResources: string[];
    ShortName: string;
    UnsupportedEnvironments: string[];
};
export { identifier, icon, WFAction };
