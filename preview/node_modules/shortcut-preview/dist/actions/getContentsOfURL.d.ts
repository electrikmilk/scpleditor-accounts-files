declare const identifier = "is.workflow.actions.downloadurl";
declare const icon = "Downloads";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionNote: string;
        DescriptionResult: string;
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Required: boolean;
        Types: string[];
    };
    InputPassthrough: boolean;
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
        DefaultValue?: undefined;
        Description?: undefined;
        DoNotLocalizeValues?: undefined;
        Items?: undefined;
        RequiredResources?: undefined;
        ItemTypeName?: undefined;
        DisallowedVariableTypes?: undefined;
        AllowedValueTypes?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Description: string;
        DoNotLocalizeValues: boolean;
        Items: string[];
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        ItemTypeName?: undefined;
        DisallowedVariableTypes?: undefined;
        AllowedValueTypes?: undefined;
    } | {
        Class: string;
        ItemTypeName: string;
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        DefaultValue?: undefined;
        Description?: undefined;
        DoNotLocalizeValues?: undefined;
        Items?: undefined;
        DisallowedVariableTypes?: undefined;
        AllowedValueTypes?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        DisallowedVariableTypes: string[];
        Items: string[];
        Key: string;
        Label: string;
        RequiredResources: ({
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
            WFParameterRelation?: undefined;
            WFParameterValues?: undefined;
        } | {
            WFParameterKey: string;
            WFParameterRelation: string;
            WFParameterValues: string[];
            WFResourceClass: string;
            WFParameterValue?: undefined;
        })[];
        Description?: undefined;
        DoNotLocalizeValues?: undefined;
        ItemTypeName?: undefined;
        AllowedValueTypes?: undefined;
    } | {
        AllowedValueTypes: number[];
        Class: string;
        ItemTypeName: string;
        Key: string;
        Label: string;
        RequiredResources: ({
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
            WFParameterRelation?: undefined;
            WFParameterValues?: undefined;
        } | {
            WFParameterKey: string;
            WFParameterValue: string;
            WFResourceClass: string;
            WFParameterRelation?: undefined;
            WFParameterValues?: undefined;
        } | {
            WFParameterKey: string;
            WFParameterRelation: string;
            WFParameterValues: string[];
            WFResourceClass: string;
            WFParameterValue?: undefined;
        })[];
        DefaultValue?: undefined;
        Description?: undefined;
        DoNotLocalizeValues?: undefined;
        Items?: undefined;
        DisallowedVariableTypes?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        RequiredResources: ({
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
            WFParameterRelation?: undefined;
            WFParameterValues?: undefined;
        } | {
            WFParameterKey: string;
            WFParameterValue: string;
            WFResourceClass: string;
            WFParameterRelation?: undefined;
            WFParameterValues?: undefined;
        } | {
            WFParameterKey: string;
            WFParameterRelation: string;
            WFParameterValues: string[];
            WFResourceClass: string;
            WFParameterValue?: undefined;
        })[];
        DefaultValue?: undefined;
        Description?: undefined;
        DoNotLocalizeValues?: undefined;
        Items?: undefined;
        ItemTypeName?: undefined;
        DisallowedVariableTypes?: undefined;
        AllowedValueTypes?: undefined;
    })[];
    ShortName: string;
};
export { identifier, icon, WFAction };
