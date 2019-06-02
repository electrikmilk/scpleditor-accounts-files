declare const identifier = "is.workflow.actions.skipback";
declare const icon = "Rewind";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionSummary: string;
    };
    InputPassthrough: boolean;
    Name: string;
    Parameters: {
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
    }[];
    RequiredResources: string[];
    WFSkipSongActionMode: string;
};
export { identifier, icon, WFAction };
