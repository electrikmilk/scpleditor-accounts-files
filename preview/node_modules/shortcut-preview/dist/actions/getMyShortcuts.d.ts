declare const identifier = "is.workflow.actions.getmyworkflows";
declare const icon = "Shortcuts";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
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
    SuggestedNever: boolean;
};
export { identifier, icon, WFAction };
