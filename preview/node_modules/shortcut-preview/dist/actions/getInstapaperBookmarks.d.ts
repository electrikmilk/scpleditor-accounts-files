declare const identifier = "is.workflow.actions.instapaper.get";
declare const icon = "Instapaper";
declare const WFAction: {
    ActionClass: string;
    AppIdentifier: string;
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
        AlwaysShowsButton: boolean;
        Class: string;
        Description: string;
        Key: string;
        Label: string;
        NoneLabel: string;
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
        AlwaysShowsButton?: undefined;
        Description?: undefined;
        Label?: undefined;
        NoneLabel?: undefined;
    })[];
    RequiredResources: string[];
    ShortName: string;
};
export { identifier, icon, WFAction };
