declare const identifier = "is.workflow.actions.searchmaps";
declare const icon = "Maps";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
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
        DefaultValue: string;
        Hidden: boolean;
        Key: string;
        Label: string;
        SupportedApps: string[];
    }[];
    ShortName: string;
    UserInterfaces: string[];
};
export { identifier, icon, WFAction };
