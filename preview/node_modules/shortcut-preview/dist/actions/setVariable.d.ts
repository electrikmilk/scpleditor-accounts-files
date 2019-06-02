declare const identifier = "is.workflow.actions.setvariable";
declare const icon = "Variable";
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
    InputPassthrough: boolean;
    Name: string;
    Parameters: {
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
    }[];
};
export { identifier, icon, WFAction };
