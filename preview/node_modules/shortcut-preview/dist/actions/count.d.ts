declare const identifier = "is.workflow.actions.count";
declare const icon = "Calculator";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionNote: string;
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Required: boolean;
        Types: string[];
    };
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: {
        Class: string;
        Items: string[];
        Key: string;
        Label: string;
    }[];
};
export { identifier, icon, WFAction };
