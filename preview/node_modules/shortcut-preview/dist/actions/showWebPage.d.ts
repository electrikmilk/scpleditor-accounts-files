declare const identifier = "is.workflow.actions.showwebpage";
declare const icon = "Safari";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
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
    Name: string;
    Parameters: {
        Class: string;
        DefaultValue: boolean;
        Description: string;
        Key: string;
        Label: string;
    }[];
    RequiredResources: string[];
    UserInterfaces: string[];
};
export { identifier, icon, WFAction };
