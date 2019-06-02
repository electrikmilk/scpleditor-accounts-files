declare const identifier = "is.workflow.actions.get.playlist";
declare const icon = "Music";
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
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: {
        Class: string;
        Key: string;
        Label: string;
    }[];
    RequiredResources: string[];
};
export { identifier, icon, WFAction };
