declare const identifier = "is.workflow.actions.trello.add.board";
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
        Multiline?: undefined;
    } | {
        Class: string;
        Key: string;
        Multiline: boolean;
        Placeholder: string;
        Label?: undefined;
        TextAlignment?: undefined;
    })[];
    RequiredResources: string[];
    ShortName: string;
};
export { identifier, icon, WFAction };
