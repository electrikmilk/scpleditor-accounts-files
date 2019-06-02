declare const identifier = "is.workflow.actions.getdirections";
declare const icon = "Maps";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    Description: {
        DescriptionInput: string;
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Required: boolean;
        Types: string[];
    };
    InputPassthrough: boolean;
    Name: string;
    Parameters: ({
        Class: string;
        DefaultValue: string;
        Key: string;
        Label: string;
        SupportedApps: string[];
        RequiredResources?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValues: string[];
            WFResourceClass: string;
        }[];
        SupportedApps?: undefined;
    })[];
    RequiredResources: string[];
    UserInterfaces: string[];
};
export { identifier, icon, WFAction };
