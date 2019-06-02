declare const identifier = "is.workflow.actions.removeevents";
declare const icon = "Calendar";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    CreationDate: string;
    Description: {
        DescriptionNote: string;
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
        DefaultValue: boolean;
        Description: string;
        Key: string;
        Label: string;
    }[];
    RequiredResources: string[];
    WFCalendarItemEntityType: string;
};
export { identifier, icon, WFAction };
