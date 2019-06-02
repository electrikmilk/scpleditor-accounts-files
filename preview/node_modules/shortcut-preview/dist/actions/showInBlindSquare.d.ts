declare const identifier = "is.workflow.actions.showinblindsquare";
declare const icon = "BlindSquare";
declare const WFAction: {
    ActionClass: string;
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
    Parameters: {
        Class: string;
        DefaultValue: boolean;
        Key: string;
        Label: string;
    }[];
    RequiredResources: (string | {
        AppIdentifier: string;
        WFResourceClass: string;
    })[];
    ShortName: string;
};
export { identifier, icon, WFAction };
