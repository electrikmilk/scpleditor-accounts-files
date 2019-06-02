declare const identifier = "is.workflow.actions.dictatetext";
declare const icon = "Dictation";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    CreationDate: string;
    Description: {
        DescriptionSummary: string;
    };
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: ({
        Class: string;
        Items: never[];
        Key: string;
        Label: string;
        DefaultValue?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
    })[];
    RequiredResources: (string | {
        WFDeviceAttributes: {
            WFDeviceAttributeSystemVersion: {
                WFSystemVersion: string;
                WFSystemVersionRelation: string;
            };
        };
        WFResourceClass: string;
    })[];
    RunningUIComponentClass: string;
    UserInterfaces: string[];
};
export { identifier, icon, WFAction };
