declare const identifier = "is.workflow.actions.readinglist";
declare const icon = "Safari";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    Description: {
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Required: boolean;
        Types: string[];
    };
    InputPassthrough: boolean;
    Name: string;
    ShortName: string;
};
export { identifier, icon, WFAction };
