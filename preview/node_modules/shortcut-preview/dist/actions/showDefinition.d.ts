declare const identifier = "is.workflow.actions.showdefinition";
declare const icon = "Dictionary";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    CreationDate: string;
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
