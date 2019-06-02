declare const identifier = "is.workflow.actions.lowpowermode.set";
declare const icon = "Battery";
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
    RequiredResources: (string | {
        WFDeviceAttributes: {
            WFDeviceAttributeIdiom: string;
        };
        WFResourceClass: string;
    })[];
    UnsupportedEnvironments: string[];
};
export { identifier, icon, WFAction };
