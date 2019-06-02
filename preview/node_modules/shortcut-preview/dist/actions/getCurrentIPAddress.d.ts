declare const identifier = "is.workflow.actions.getipaddress";
declare const icon = "Network";
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
    Parameters: {
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
    }[];
    SuggestedNever: boolean;
};
export { identifier, icon, WFAction };
