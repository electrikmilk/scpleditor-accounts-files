declare const identifier = "is.workflow.actions.giphy";
declare const icon = "Giphy";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    CreationDate: string;
    Description: {
        DescriptionNote: string;
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
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        DefaultValue?: undefined;
        RequiredResources?: undefined;
        StepperDescription?: undefined;
        StepperNoun?: undefined;
        StepperPluralNoun?: undefined;
        StepperPrefix?: undefined;
    } | {
        Class: string;
        DefaultValue: boolean;
        Key: string;
        Label: string;
        AutocapitalizationType?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        RequiredResources?: undefined;
        StepperDescription?: undefined;
        StepperNoun?: undefined;
        StepperPluralNoun?: undefined;
        StepperPrefix?: undefined;
    } | {
        Class: string;
        DefaultValue: number;
        Key: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        StepperDescription: string;
        StepperNoun: string;
        StepperPluralNoun: string;
        StepperPrefix: string;
        AutocapitalizationType?: undefined;
        Label?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        AutocapitalizationType?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        DefaultValue?: undefined;
        StepperDescription?: undefined;
        StepperNoun?: undefined;
        StepperPluralNoun?: undefined;
        StepperPrefix?: undefined;
    })[];
    RequiredResources: {
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        WFResourceClass: string;
    }[];
    UserInterfaces: string[];
};
export { identifier, icon, WFAction };
