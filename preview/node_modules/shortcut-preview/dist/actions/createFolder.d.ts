declare const identifier = "is.workflow.actions.file.createfolder";
declare const icon = "Documents";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    CreationDate: string;
    Description: {
        DescriptionSummary: string;
    };
    Name: string;
    Parameters: ({
        AlwaysShowsButton: boolean;
        Class: string;
        Key: string;
        Label: string;
        AutocapitalizationType?: undefined;
        Description?: undefined;
        DisableAutocorrection?: undefined;
        KeyboardType?: undefined;
        TextAlignment?: undefined;
    } | {
        AutocapitalizationType: string;
        Class: string;
        Description: string;
        DisableAutocorrection: boolean;
        Key: string;
        KeyboardType: string;
        Label: string;
        TextAlignment: string;
        AlwaysShowsButton?: undefined;
    })[];
    SuggestedAsInitialAction: boolean;
};
export { identifier, icon, WFAction };
