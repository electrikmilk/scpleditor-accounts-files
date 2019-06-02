declare const identifier = "is.workflow.actions.trello.add.card";
declare const icon = "Trello";
declare const WFAction: {
    ActionClass: string;
    AppIdentifier: string;
    CreationDate: string;
    Description: {
        DescriptionSummary: string;
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
        BoardKey?: undefined;
        DefaultValue?: undefined;
        Items?: undefined;
        Description?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        BoardKey?: undefined;
        DefaultValue?: undefined;
        Items?: undefined;
        Description?: undefined;
        Multiline?: undefined;
    } | {
        BoardKey: string;
        Class: string;
        Key: string;
        Label: string;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        DefaultValue?: undefined;
        Items?: undefined;
        Description?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        BoardKey?: undefined;
        Description?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        Description: string;
        Key: string;
        Label: string;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        BoardKey?: undefined;
        DefaultValue?: undefined;
        Items?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        Key: string;
        Multiline: boolean;
        Placeholder: string;
        Label?: undefined;
        TextAlignment?: undefined;
        BoardKey?: undefined;
        DefaultValue?: undefined;
        Items?: undefined;
        Description?: undefined;
    })[];
    RequiredResources: string[];
    ShortName: string;
};
export { identifier, icon, WFAction };
