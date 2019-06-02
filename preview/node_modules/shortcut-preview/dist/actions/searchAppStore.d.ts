declare const identifier = "is.workflow.actions.searchappstore";
declare const icon = "AppStore";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    CreationDate: string;
    Description: {
        DescriptionSummary: string;
    };
    InputPassthrough: boolean;
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: ({
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        DefaultValue?: undefined;
        MaximumValue?: undefined;
        MinimumValue?: undefined;
        Pefix?: undefined;
        StepperDescription?: undefined;
        StepperNoun?: undefined;
        StepperPluralNoun?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        DefaultValue?: undefined;
        MaximumValue?: undefined;
        MinimumValue?: undefined;
        Pefix?: undefined;
        StepperDescription?: undefined;
        StepperNoun?: undefined;
        StepperPluralNoun?: undefined;
    } | {
        Class: string;
        DefaultValue: number;
        Key: string;
        MaximumValue: number;
        MinimumValue: number;
        Pefix: string;
        StepperDescription: string;
        StepperNoun: string;
        StepperPluralNoun: string;
        Label?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    })[];
    SuggestedNever: boolean;
};
export { identifier, icon, WFAction };
