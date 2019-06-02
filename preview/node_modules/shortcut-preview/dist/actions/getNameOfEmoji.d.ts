declare const identifier = "is.workflow.actions.getnameofemoji";
declare const icon = "Smiley";
declare const WFAction: {
    ActionClass: string;
    CreationDate: string;
    Description: {
        DescriptionSummary: string;
    };
    Input: {
        Required: boolean;
        Types: string[];
    };
    InputPassthrough: boolean;
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    ShortName: string;
    SuggestedNever: boolean;
};
export { identifier, icon, WFAction };
