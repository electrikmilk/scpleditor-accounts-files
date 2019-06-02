declare const identifier = "is.workflow.actions.previewdocument";
declare const icon = "QuickLook";
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
    Parameters: {
        Class: string;
        Key: string;
        Label: string;
        RequiredResources: {
            WFDeviceAttributes: {
                WFDeviceAttributeIdiom: string;
            };
            WFResourceClass: string;
        }[];
    }[];
    RequiredResources: string[];
    UserInterfaces: string[];
};
export { identifier, icon, WFAction };
