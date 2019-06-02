declare const identifier = "is.workflow.actions.getwebpagecontents";
declare const icon = "Safari";
declare const WFAction: {
    ActionClass: string;
    AppIdentifier: string;
    Description: {
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Required: boolean;
        Types: string[];
    };
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    ShortName: string;
    UnsupportedEnvironments: string[];
};
export { identifier, icon, WFAction };
