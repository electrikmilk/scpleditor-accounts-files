declare const identifier = "is.workflow.actions.gettext";
declare const icon = "Text";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
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
        DefaultValue: string;
        Key: string;
        Multiline: boolean;
        Placeholder: string;
    }[];
};
export { identifier, icon, WFAction };
