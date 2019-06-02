declare const identifier = "is.workflow.actions.email";
declare const icon = "Mail";
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
        Class: string;
        Key: string;
        Placeholder: string;
    }[];
    RequiredResources: string[];
};
export { identifier, icon, WFAction };
