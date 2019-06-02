declare const identifier = "is.workflow.actions.address";
declare const icon = "Maps";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    Description: {
        DescriptionSummary: string;
    };
    InputPassthrough: boolean;
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: ({
        AutocapitalizationType: string;
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        TextContentType: string;
        KeyboardType?: undefined;
    } | {
        AutocapitalizationType: string;
        Class: string;
        Key: string;
        Label: string;
        TextContentType: string;
        Placeholder?: undefined;
        KeyboardType?: undefined;
    } | {
        Class: string;
        Key: string;
        KeyboardType: string;
        Label: string;
        Placeholder: string;
        TextContentType: string;
        AutocapitalizationType?: undefined;
    } | {
        AutocapitalizationType: string;
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        TextContentType?: undefined;
        KeyboardType?: undefined;
    })[];
};
export { identifier, icon, WFAction };
