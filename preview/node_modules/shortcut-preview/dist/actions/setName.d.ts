declare const identifier = "is.workflow.actions.setitemname";
declare const icon = "Scripting";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Required: boolean;
        TypePassthrough: boolean;
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
        Description?: undefined;
        RequiredResources?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Placeholder?: undefined;
        Description?: undefined;
        RequiredResources?: undefined;
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
        Placeholder?: undefined;
    })[];
};
export { identifier, icon, WFAction };
