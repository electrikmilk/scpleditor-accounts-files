declare const identifier = "is.workflow.actions.todoist.add";
declare const icon = "Todoist";
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
    LastModifiedDate: string;
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
        DefaultValue?: undefined;
        HintDateMode?: undefined;
        Items?: undefined;
        RequiredResources?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Key: string;
        Label: string;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        HintDateMode?: undefined;
        Items?: undefined;
        RequiredResources?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        HintDateMode: string;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        DefaultValue?: undefined;
        Items?: undefined;
        RequiredResources?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterRelation: string;
            WFParameterValue: string;
            WFResourceClass: string;
        }[];
        Placeholder?: undefined;
        TextAlignment?: undefined;
        HintDateMode?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        HintDateMode?: undefined;
        RequiredResources?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Multiline: boolean;
        Placeholder: string;
        TextAlignment?: undefined;
        DefaultValue?: undefined;
        HintDateMode?: undefined;
        Items?: undefined;
        RequiredResources?: undefined;
    })[];
    RequiredResources: {
        WFAccountClass: string;
        WFResourceClass: string;
    }[];
};
export { identifier, icon, WFAction };
