declare const identifier = "is.workflow.actions.math";
declare const icon = "Calculator";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
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
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
        RequiredResources?: undefined;
        AllowsDecimalNumbers?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    } | {
        Class: string;
        Items: string[];
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: string;
            WFResourceClass: string;
        }[];
        DefaultValue?: undefined;
        AllowsDecimalNumbers?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    } | {
        AllowsDecimalNumbers: boolean;
        Class: string;
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
    } | {
        AllowsDecimalNumbers: boolean;
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        RequiredResources: ({
            WFParameterKey: string;
            WFParameterValue: string;
            WFResourceClass: string;
            WFParameterValues?: undefined;
        } | {
            WFParameterKey: string;
            WFParameterValues: string[];
            WFResourceClass: string;
            WFParameterValue?: undefined;
        })[];
        TextAlignment: string;
        DefaultValue?: undefined;
        Items?: undefined;
    })[];
};
export { identifier, icon, WFAction };
