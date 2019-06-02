declare const identifier = "is.workflow.actions.addmusictoupnext";
declare const icon = "Music";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    CreationDate: string;
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
    Parameters: {
        Class: string;
        DefaultValue: string;
        DisallowedVariableTypes: string[];
        Items: string[];
        Key: string;
        Label: string;
    }[];
    RequiredResources: (string | {
        WFDeviceAttributes: {
            WFDeviceAttributeSystemVersion: {
                WFSystemVersion: string;
                WFSystemVersionRelation: string;
            };
        };
        WFResourceClass: string;
    })[];
};
export { identifier, icon, WFAction };
