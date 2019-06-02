declare const identifier = "is.workflow.actions.trello.get";
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
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
        RequiredResources?: undefined;
        BoardKey?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValues: string[];
            WFResourceClass: string;
        }[];
        DefaultValue?: undefined;
        Items?: undefined;
        BoardKey?: undefined;
    } | {
        BoardKey: string;
        Class: string;
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: string;
            WFResourceClass: string;
        }[];
        DefaultValue?: undefined;
        Items?: undefined;
    })[];
    RequiredResources: string[];
    ShortName: string;
};
export { identifier, icon, WFAction };
