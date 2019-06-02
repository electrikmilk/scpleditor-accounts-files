declare const identifier = "is.workflow.actions.url";
declare const icon = "URL";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
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
        AutocapitalizationType: string;
        Class: string;
        DisableAutocorrection: boolean;
        Key: string;
        KeyboardType: string;
        Label: string;
        Placeholder: string;
        TextContentType: string;
    }[];
};
export { identifier, icon, WFAction };
