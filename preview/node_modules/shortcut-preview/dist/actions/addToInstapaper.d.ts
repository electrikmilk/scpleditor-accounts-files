declare const identifier = "is.workflow.actions.instapaper.add";
declare const icon = "Instapaper";
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
        AlwaysShowsButton: boolean;
        Class: string;
        Description: string;
        Key: string;
        Label: string;
        NoneLabel: string;
    }[];
    RequiredResources: string[];
    ShortName: string;
};
export { identifier, icon, WFAction };
