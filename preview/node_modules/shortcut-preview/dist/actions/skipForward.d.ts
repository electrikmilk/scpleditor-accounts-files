declare const identifier = "is.workflow.actions.skipforward";
declare const icon = "FastForward";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionSummary: string;
    };
    InputPassthrough: boolean;
    Name: string;
    RequiredResources: string[];
    WFSkipSongActionMode: string;
};
export { identifier, icon, WFAction };
