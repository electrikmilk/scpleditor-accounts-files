declare const identifier = "is.workflow.actions.goodreader.open";
declare const icon = "GoodReader";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    CreationDate: string;
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
    RequiredResources: (string | {
        AppIdentifier: string;
        WFResourceClass: string;
    })[];
};
export { identifier, icon, WFAction };
