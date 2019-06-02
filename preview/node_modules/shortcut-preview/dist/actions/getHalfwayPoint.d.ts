declare const identifier = "is.workflow.actions.gethalfwaypoint";
declare const icon = "Maps";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    CreationDate: string;
    Description: {
        DescriptionSummary: string;
    };
    Name: string;
    Output: {
        OutputName: string;
        Types: string[];
    };
    Parameters: {
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
    }[];
    SuggestedNever: boolean;
};
export { identifier, icon, WFAction };
