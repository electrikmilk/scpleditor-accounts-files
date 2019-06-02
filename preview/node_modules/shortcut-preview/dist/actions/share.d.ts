declare const identifier = "is.workflow.actions.share";
declare const icon = "Sharing";
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
    RequiredResources: string[];
    UserInterfaces: string[];
};
export { identifier, icon, WFAction };
