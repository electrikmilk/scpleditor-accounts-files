declare const identifier = "is.workflow.actions.format.number";
declare const icon = "Calculator";
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
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: {
        Class: string;
        DefaultValue: number;
        Key: string;
        MinimumValue: number;
        StepperDescription: string;
        StepperNoun: string;
        StepperPluralNoun: string;
    }[];
};
export { identifier, icon, WFAction };
