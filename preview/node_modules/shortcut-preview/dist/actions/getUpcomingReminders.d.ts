declare const identifier = "is.workflow.actions.getupcomingreminders";
declare const icon = "Reminders";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
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
        AllowsAllCalendars: boolean;
        Class: string;
        EventKitEntityType: string;
        Key: string;
        Label: string;
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
        AllowsAllCalendars?: undefined;
        EventKitEntityType?: undefined;
        Label?: undefined;
    })[];
    RequiredResources: string[];
    ShortName: string;
    WFGetUpcomingItemType: number;
};
export { identifier, icon, WFAction };
