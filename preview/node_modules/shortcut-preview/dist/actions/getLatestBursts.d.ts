declare const identifier = "is.workflow.actions.getlatestbursts";
declare const icon = "Bursts";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
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
