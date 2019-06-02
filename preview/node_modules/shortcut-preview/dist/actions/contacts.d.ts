declare const identifier = "is.workflow.actions.contacts";
declare const icon = "Contacts";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    Description: {
        DescriptionSummary: string;
    };
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: {
        AllowsTextEntry: boolean;
        Class: string;
        Key: string;
        Placeholder: string;
    }[];
    RequiredResources: string[];
};
export { identifier, icon, WFAction };
