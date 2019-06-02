declare const identifier = "is.workflow.actions.savetocameraroll";
declare const icon = "Photos";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    Description: {
        DescriptionInput: string;
        DescriptionNote: string;
        DescriptionResult: string;
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Required: boolean;
        Types: string[];
    };
    InputPassthrough: boolean;
    LastModifiedDate: string;
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: {
        AlwaysShowsButton: boolean;
        Class: string;
        Key: string;
        Label: string;
    }[];
    RequiredResources: string[];
    ShortName: string;
};
export { identifier, icon, WFAction };
