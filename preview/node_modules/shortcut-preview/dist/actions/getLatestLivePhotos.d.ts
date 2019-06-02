declare const identifier = "is.workflow.actions.getlatestlivephotos";
declare const icon = "LivePhotos";
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
