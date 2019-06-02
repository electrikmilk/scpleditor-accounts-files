declare const identifier = "is.workflow.actions.vibrate";
declare const icon = "Notification";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionSummary: string;
    };
    InputPassthrough: boolean;
    Name: string;
    Parameters: {
        Class: string;
        DefaultValue: string;
        Description: string;
        Hidden: boolean;
        Items: string[];
        Key: string;
        Label: string;
        RequiredResources: {
            WFResourceClass: string;
            WFWorkflowType: string;
        }[];
    }[];
    RequiredResources: {
        WFDeviceAttributes: {
            WFDeviceAttributeCapabilities: string[];
        };
        WFResourceClass: string;
    }[];
};
export { identifier, icon, WFAction };
