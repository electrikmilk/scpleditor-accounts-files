declare const identifier = "is.workflow.actions.getbatterylevel";
declare const icon = "Battery";
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
    SuggestedNever: boolean;
};
export { identifier, icon, WFAction };
