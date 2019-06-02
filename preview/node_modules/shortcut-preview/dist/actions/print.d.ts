declare const identifier = "is.workflow.actions.print";
declare const icon = "Print";
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
