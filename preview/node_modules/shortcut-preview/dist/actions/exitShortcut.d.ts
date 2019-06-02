declare const identifier = "is.workflow.actions.exit";
declare const icon = "Scripting";
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
    LastModifiedDate: string;
    Name: string;
    RequiredResources: string[];
    SuggestedNever: boolean;
};
export { identifier, icon, WFAction };
