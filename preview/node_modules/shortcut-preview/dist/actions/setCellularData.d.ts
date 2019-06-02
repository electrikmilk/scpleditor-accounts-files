declare const identifier = "is.workflow.actions.cellulardata.set";
declare const icon = "CellularData";
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
