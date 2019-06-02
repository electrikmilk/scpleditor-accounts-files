declare const identifier = "is.workflow.actions.runscene";
declare const icon = "Home";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    Description: {
        DescriptionSummary: string;
    };
    InputPassthrough: boolean;
    Name: string;
    Parameters: ({
        AlwaysShowsButton: boolean;
        Class: string;
        Description: string;
        DisallowedVariableTypes: string[];
        Key: string;
        Label: string;
    } | {
        AlwaysShowsButton: boolean;
        Class: string;
        Key: string;
        Label: string;
        Description?: undefined;
        DisallowedVariableTypes?: undefined;
    })[];
    RequiredResources: string[];
};
export { identifier, icon, WFAction };
