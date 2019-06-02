declare const identifier = "is.workflow.actions.setbrightness";
declare const icon = "Brightness";
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
        DefaultValue: number;
        Description: string;
        Key: string;
        Label: string;
    }[];
    RequiredResources: string[];
};
export { identifier, icon, WFAction };
