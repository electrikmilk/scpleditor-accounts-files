declare const identifier = "is.workflow.actions.pinboard.get";
declare const icon = "Pinboard";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppSection: string;
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
    Parameters: ({
        AutocapitalizationType: string;
        Class: string;
        Description: string;
        Key: string;
        Label: string;
        Placeholder: string;
        DefaultValue?: undefined;
        StepperDescription?: undefined;
        StepperNoun?: undefined;
        StepperPluralNoun?: undefined;
        StepperPrefix?: undefined;
    } | {
        Class: string;
        DefaultValue: number;
        Key: string;
        StepperDescription: string;
        StepperNoun: string;
        StepperPluralNoun: string;
        StepperPrefix: string;
        AutocapitalizationType?: undefined;
        Description?: undefined;
        Label?: undefined;
        Placeholder?: undefined;
    })[];
    RequiredResources: string[];
    ShortName: string;
};
export { identifier, icon, WFAction };
