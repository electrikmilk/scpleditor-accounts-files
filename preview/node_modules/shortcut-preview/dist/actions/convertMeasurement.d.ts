declare const identifier = "is.workflow.actions.measurement.convert";
declare const icon = "Calculator";
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
    Parameters: ({
        Class: string;
        DefaultValue: string;
        DisallowedVariableTypes: string[];
        Key: string;
        Label: string;
        AlwaysShowsButton?: undefined;
        RequiredResources?: undefined;
        WFMeasurementUnitTypeKey?: undefined;
    } | {
        AlwaysShowsButton: boolean;
        Class: string;
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterRelation: string;
            WFResourceClass: string;
        }[];
        WFMeasurementUnitTypeKey: string;
        DefaultValue?: undefined;
        DisallowedVariableTypes?: undefined;
    })[];
};
export { identifier, icon, WFAction };
