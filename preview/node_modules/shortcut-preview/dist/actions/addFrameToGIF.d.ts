declare const identifier = "is.workflow.actions.addframetogif";
declare const icon = "GIF";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
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
    InputPassthrough: boolean;
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
        AllowsDecimalNumbers?: undefined;
        DefaultValue?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        RequiredResources?: undefined;
    } | {
        AllowsDecimalNumbers: boolean;
        Class: string;
        DefaultValue: number;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        RequiredResources?: undefined;
    } | {
        Class: string;
        DefaultValue: boolean;
        Key: string;
        Label: string;
        AllowsDecimalNumbers?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        RequiredResources?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        TextAlignment: string;
        AllowsDecimalNumbers?: undefined;
        DefaultValue?: undefined;
    })[];
};
export { identifier, icon, WFAction };
