declare const identifier = "is.workflow.actions.getlastscreenshot";
declare const icon = "Photos";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    Description: {
        DescriptionSummary: string;
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
        StepperDescription: string;
        StepperNoun: string;
        StepperPluralNoun: string;
    }[];
    RequiredResources: string[];
    ShortName: string;
    WFGetLatestPhotosActionType: string;
};
export { identifier, icon, WFAction };
