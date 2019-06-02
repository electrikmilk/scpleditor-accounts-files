declare const identifier = "is.workflow.actions.makezip";
declare const icon = "Documents";
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
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        DefaultValue?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        DefaultValue: string;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    })[];
};
export { identifier, icon, WFAction };
