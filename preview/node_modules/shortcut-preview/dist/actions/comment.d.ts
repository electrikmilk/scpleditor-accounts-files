declare const identifier = "is.workflow.actions.comment";
declare const icon = "Text";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    CreationDate: string;
    Description: {
        DescriptionSummary: string;
    };
    InputPassthrough: boolean;
    Name: string;
    Parameters: {
        Class: string;
        DisallowedVariableTypes: string[];
        Key: string;
        Multiline: boolean;
        Placeholder: string;
    }[];
    SuggestedNever: boolean;
};
export { identifier, icon, WFAction };
