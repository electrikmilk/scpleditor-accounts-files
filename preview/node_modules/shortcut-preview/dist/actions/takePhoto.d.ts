declare const identifier = "is.workflow.actions.takephoto";
declare const icon = "Camera";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    Description: {
        DescriptionResult: string;
        DescriptionSummary: string;
    };
    InputPassthrough: boolean;
    LastModifiedDate: string;
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Required: boolean;
        Types: string[];
    };
    Parameters: ({
        Class: string;
        DefaultValue: boolean;
        Key: string;
        Label: string;
        RequiredResources?: undefined;
        StepperDescription?: undefined;
        StepperNoun?: undefined;
        StepperPluralNoun?: undefined;
        StepperPrefix?: undefined;
        Items?: undefined;
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
        Label?: undefined;
        Items?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
        RequiredResources?: undefined;
        StepperDescription?: undefined;
        StepperNoun?: undefined;
        StepperPluralNoun?: undefined;
        StepperPrefix?: undefined;
    })[];
    RequiredResources: string[];
    UnsupportedEnvironments: string[];
    UserInterfaces: string[];
};
export { identifier, icon, WFAction };
