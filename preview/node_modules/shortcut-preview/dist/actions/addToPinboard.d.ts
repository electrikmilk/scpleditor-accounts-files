declare const identifier = "is.workflow.actions.pinboard.add";
declare const icon = "Pinboard";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppSection: string;
    CreationDate: string;
    Description: {
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Required: boolean;
        Types: string[];
    };
    InputPassthrough: boolean;
    Name: string;
    Parameters: ({
        AutocapitalizationType: string;
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        DefaultValue?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        DefaultValue: boolean;
        Key: string;
        Label: string;
        AutocapitalizationType?: undefined;
        Placeholder?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Multiline: boolean;
        Placeholder: string;
        AutocapitalizationType?: undefined;
        DefaultValue?: undefined;
    })[];
    RequiredResources: string[];
};
export { identifier, icon, WFAction };
