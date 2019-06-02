declare const identifier = "is.workflow.actions.openurl";
declare const icon = "Safari";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    Description: {
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Required: boolean;
        Types: string[];
    };
    InputPassthrough: boolean;
    IntentIdentifier: string;
    LastModifiedDate: string;
    Name: string;
    Parameters: never[];
    RequiredResources: string[];
};
export { identifier, icon, WFAction };
