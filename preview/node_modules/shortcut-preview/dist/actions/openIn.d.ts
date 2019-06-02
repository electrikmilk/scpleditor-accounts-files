declare const identifier = "is.workflow.actions.openin";
declare const icon = "Apps";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
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
    Parameters: ({
        Class: string;
        DefaultValue: boolean;
        Key: string;
        Label: string;
        AppSearchType?: undefined;
        RequiredResources?: undefined;
        Hidden?: undefined;
    } | {
        AppSearchType: string;
        Class: string;
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        DefaultValue?: undefined;
        Hidden?: undefined;
    } | {
        Class: string;
        Hidden: boolean;
        Key: string;
        DefaultValue?: undefined;
        Label?: undefined;
        AppSearchType?: undefined;
        RequiredResources?: undefined;
    })[];
    RequiredResources: string[];
    UserInterfaces: string[];
};
export { identifier, icon, WFAction };
