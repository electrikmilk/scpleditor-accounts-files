declare const identifier = "is.workflow.actions.viewresult";
declare const icon = "Graph";
declare const WFAction: {
    ActionClass: string;
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
    RequiredResources: string[];
    ShortName: string;
    UserInterfaces: string[];
};
export { identifier, icon, WFAction };
