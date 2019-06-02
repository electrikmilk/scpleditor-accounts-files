declare const identifier = "is.workflow.actions.choosefrommenu";
declare const icon = "Scripting";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionSummary: string;
    };
    InputPassthrough: boolean;
    Name: string;
    Parameters: ({
        Class: string;
        Description: string;
        DisallowedVariableTypes: string[];
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        DefaultValue?: undefined;
    } | {
        Class: string;
        DefaultValue: string[];
        Key: string;
        Label: string;
        Description?: undefined;
        DisallowedVariableTypes?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    })[];
    RequiredResources: string[];
    ShortName: string;
    SuggestedAsInitialAction: boolean;
};
export { identifier, icon, WFAction };
