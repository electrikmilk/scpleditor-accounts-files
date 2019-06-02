declare const identifier = "is.workflow.actions.ask";
declare const icon = "Scripting";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionSummary: string;
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
        DisallowedVariableTypes: string[];
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        RequiredResources?: undefined;
        DefaultValue?: undefined;
        Items?: undefined;
        Description?: undefined;
        Hidden?: undefined;
    } | {
        Class: string;
        DisallowedVariableTypes: string[];
        Key: string;
        Label: string;
        Placeholder: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterRelation: string;
            WFParameterValue: string;
            WFResourceClass: string;
        }[];
        TextAlignment: string;
        DefaultValue?: undefined;
        Items?: undefined;
        Description?: undefined;
        Hidden?: undefined;
    } | {
        Class: string;
        DisallowedVariableTypes: string[];
        Key: string;
        Label: string;
        Placeholder: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: string;
            WFResourceClass: string;
        }[];
        TextAlignment: string;
        DefaultValue?: undefined;
        Items?: undefined;
        Description?: undefined;
        Hidden?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        DisallowedVariableTypes: string[];
        Items: string[];
        Key: string;
        Label: string;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        RequiredResources?: undefined;
        Description?: undefined;
        Hidden?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        DisallowedVariableTypes: string[];
        Items: string[];
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: string;
            WFResourceClass: string;
        }[];
        Placeholder?: undefined;
        TextAlignment?: undefined;
        Description?: undefined;
        Hidden?: undefined;
    } | {
        Class: string;
        Description: string;
        DisallowedVariableTypes: string[];
        Hidden: boolean;
        Key: string;
        Label: string;
        RequiredResources: ({
            WFParameterKey: string;
            WFParameterRelation: string;
            WFParameterValue: string;
            WFResourceClass: string;
            WFWorkflowType?: undefined;
        } | {
            WFResourceClass: string;
            WFWorkflowType: string;
            WFParameterKey?: undefined;
            WFParameterRelation?: undefined;
            WFParameterValue?: undefined;
        })[];
        Placeholder?: undefined;
        TextAlignment?: undefined;
        DefaultValue?: undefined;
        Items?: undefined;
    })[];
    RequiredResources: string[];
    UserInterfaces: string[];
};
export { identifier, icon, WFAction };
