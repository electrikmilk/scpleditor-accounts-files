declare const identifier = "is.workflow.actions.wunderlist.add";
declare const icon = "Wunderlist";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    CreationDate: string;
    Description: {
        DescriptionInput: string;
        DescriptionResult: string;
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Required: boolean;
        Types: string[];
    };
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: ({
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        Multiline?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Multiline: boolean;
        Placeholder: string;
        TextAlignment?: undefined;
    })[];
    RequiredResources: {
        WFAccountClass: string;
        WFResourceClass: string;
    }[];
    ShortName: string;
};
export { identifier, icon, WFAction };
