declare const identifier = "is.workflow.actions.list";
declare const icon = "Scripting";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionNote: string;
        DescriptionSummary: string;
    };
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: {
        Class: string;
        DefaultValue: string[];
        Key: string;
        Label: string;
    }[];
    SuggestedNever: boolean;
};
export { identifier, icon, WFAction };
