declare const identifier = "is.workflow.actions.bluetooth.set";
declare const icon = "Bluetooth";
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
