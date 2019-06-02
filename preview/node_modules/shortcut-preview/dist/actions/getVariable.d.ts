declare const identifier = "is.workflow.actions.getvariable";
declare const icon = "Variable";
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
        DisallowedVariableTypes: string[];
        Key: string;
        Label: string;
    }[];
};
export { identifier, icon, WFAction };
