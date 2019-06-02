declare const identifier = "is.workflow.actions.evernote.delete";
declare const icon = "Evernote";
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
    Name: string;
    Parameters: {
        Class: string;
        DefaultValue: boolean;
        Description: string;
        Key: string;
        Label: string;
    }[];
    RequiredResources: string[];
};
export { identifier, icon, WFAction };
