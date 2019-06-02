declare const identifier = "is.workflow.actions.playmusic";
declare const icon = "Music";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    Description: {
        DescriptionInput: string;
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Types: string[];
    };
    InputPassthrough: boolean;
    Name: string;
    Parameters: {
        Class: string;
        Items: string[];
        Key: string;
        Label: string;
    }[];
    RequiredResources: string[];
};
export { identifier, icon, WFAction };
