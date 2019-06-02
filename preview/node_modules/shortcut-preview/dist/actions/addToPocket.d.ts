declare const identifier = "is.workflow.actions.pocket.add";
declare const icon = "Pocket";
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
    InputPassthrough: boolean;
    Name: string;
    Parameters: {
        Class: string;
        Description: string;
        Key: string;
        Label: string;
        Placeholder: string;
    }[];
    RequiredResources: string[];
};
export { identifier, icon, WFAction };
