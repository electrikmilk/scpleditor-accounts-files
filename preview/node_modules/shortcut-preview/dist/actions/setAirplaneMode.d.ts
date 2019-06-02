declare const identifier = "is.workflow.actions.airplanemode.set";
declare const icon = "AirplaneMode";
declare const WFAction: {
    ACECommandClass: string;
    ACESettingValueKey: string;
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionSummary: string;
    };
    InputPassthrough: boolean;
    Name: string;
    Parameters: {
        Class: string;
        DefaultValue: boolean;
        Key: string;
        Label: string;
    }[];
    RequiredResources: string[];
    UnsupportedEnvironments: string[];
};
export { identifier, icon, WFAction };
