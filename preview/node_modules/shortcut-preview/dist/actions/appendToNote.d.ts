declare const identifier = "is.workflow.actions.evernote.append";
declare const icon = "Evernote";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    Description: {
        DescriptionInput: string;
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
        Description: string;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        DefaultValue?: undefined;
        Items?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
        Description?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    } | {
        Class: string;
        Description: string;
        Key: string;
        Label: string;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        DefaultValue?: undefined;
        Items?: undefined;
    })[];
    RequiredResources: string[];
};
export { identifier, icon, WFAction };
