declare const identifier = "is.workflow.actions.openapp";
declare const icon = "Apps";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionSummary: string;
    };
    InputPassthrough: boolean;
    Name: string;
    Parameters: ({
        AppSearchType: string;
        Class: string;
        Key: string;
        Label: string;
        Hidden?: undefined;
    } | {
        Class: string;
        Hidden: boolean;
        Key: string;
        AppSearchType?: undefined;
        Label?: undefined;
    })[];
    RequiredResources: string[];
    SuggestedNever: boolean;
};
export { identifier, icon, WFAction };
