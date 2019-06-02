declare const identifier = "is.workflow.actions.cloudapp.upload";
declare const icon = "CloudApp";
declare const WFAction: {
    ActionClass: string;
    AppSection: string;
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
    Parameters: {
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
    }[];
    RequiredResources: string[];
    ShortName: string;
};
export { identifier, icon, WFAction };
