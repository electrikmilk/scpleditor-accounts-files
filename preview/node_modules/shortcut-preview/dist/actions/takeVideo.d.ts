declare const identifier = "is.workflow.actions.takevideo";
declare const icon = "Camera";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    Description: {
        DescriptionResult: string;
        DescriptionSummary: string;
    };
    InputPassthrough: boolean;
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
    UserInterfaces: string[];
};
export { identifier, icon, WFAction };
