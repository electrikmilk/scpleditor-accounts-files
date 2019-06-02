declare const identifier = "is.workflow.actions.clearupnext";
declare const icon = "Music";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    CreationDate: string;
    Description: {
        DescriptionSummary: string;
    };
    InputPassthrough: boolean;
    Name: string;
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
