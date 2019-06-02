declare const identifier = "is.workflow.actions.setvalueforkey";
declare const icon = "Scripting";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
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
        Label: string;
        Placeholder: string;
        TextAlignment: string;
    }[];
};
export { identifier, icon, WFAction };
