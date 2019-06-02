declare const identifier = "is.workflow.actions.selectphone";
declare const icon = "PhoneNumber";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
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
