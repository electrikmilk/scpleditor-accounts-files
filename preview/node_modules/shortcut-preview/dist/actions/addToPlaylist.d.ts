declare const identifier = "is.workflow.actions.addtoplaylist";
declare const icon = "Music";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    CreationDate: string;
    Description: {
        DescriptionInput: string;
        DescriptionResult: string;
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Required: boolean;
        Types: string[];
    };
    InputPassthrough: boolean;
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: {
        Class: string;
        Key: string;
        Label: string;
        ShowLibrary: boolean;
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
