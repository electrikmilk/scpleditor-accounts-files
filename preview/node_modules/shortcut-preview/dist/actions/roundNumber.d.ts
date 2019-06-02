declare const identifier = "is.workflow.actions.round";
declare const icon = "Calculator";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    CreationDate: string;
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
    Parameters: ({
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
        MinimumValue?: undefined;
        StepperDescription?: undefined;
        StepperNoun?: undefined;
        StepperPluralNoun?: undefined;
    } | {
        Class: string;
        DefaultValue: number;
        Key: string;
        MinimumValue: number;
        StepperDescription: string;
        StepperNoun: string;
        StepperPluralNoun: string;
        Items?: undefined;
        Label?: undefined;
    })[];
};
export { identifier, icon, WFAction };
