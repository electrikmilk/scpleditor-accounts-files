declare const identifier = "is.workflow.actions.rss";
declare const icon = "RSS";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionSummary: string;
    };
    LastModifiedDate: string;
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: ({
        AutocapitalizationType: string;
        Class: string;
        DefaultValue: string;
        DisableAutocorrection: boolean;
        Key: string;
        KeyboardType: string;
        Label: string;
        TextContentType: string;
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
        DisableAutocorrection?: undefined;
        KeyboardType?: undefined;
        Label?: undefined;
        TextContentType?: undefined;
    })[];
    ShortName: string;
};
export { identifier, icon, WFAction };
