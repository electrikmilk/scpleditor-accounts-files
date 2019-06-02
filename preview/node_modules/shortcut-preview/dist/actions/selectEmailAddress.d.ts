declare const identifier = "is.workflow.actions.selectemail";
declare const icon = "Mail";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    ContactProperties: string[];
    Description: {
        DescriptionSummary: string;
    };
    InputPassthrough: boolean;
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    RequiredResources: string[];
    ShortName: string;
    SuggestedAsInitialAction: boolean;
    UserInterfaces: string[];
};
export { identifier, icon, WFAction };
