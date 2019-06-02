declare const identifier = "is.workflow.actions.airdropdocument";
declare const icon = "AirDrop";
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
