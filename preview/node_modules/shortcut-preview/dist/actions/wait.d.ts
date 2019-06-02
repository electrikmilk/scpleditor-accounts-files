declare const identifier = "is.workflow.actions.delay";
declare const icon = "Scripting";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionSummary: string;
    };
    InputPassthrough: boolean;
    Name: string;
    Parameters: {
        Class: string;
        DefaultValue: number;
        Key: string;
        Placeholder: number;
        StepperDescription: string;
        StepperNoun: string;
        StepperPluralNoun: string;
    }[];
    RequiredResources: string[];
};
export { identifier, icon, WFAction };
