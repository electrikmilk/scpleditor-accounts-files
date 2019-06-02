declare const identifier = "is.workflow.actions.getcurrentsong";
declare const icon = "Music";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
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
};
export { identifier, icon, WFAction };
