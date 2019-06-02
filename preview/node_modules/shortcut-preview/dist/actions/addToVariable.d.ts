declare const identifier = "is.workflow.actions.appendvariable";
declare const icon = "Variable";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionResult: string;
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Required: boolean;
        TypePassthrough: boolean;
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
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
    }[];
};
export { identifier, icon, WFAction };
