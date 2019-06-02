declare const identifier = "is.workflow.actions.text.combine";
declare const icon = "Text";
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
        Items: string[];
        Key: string;
        Label: string;
        Placeholder?: undefined;
        RequiredResources?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        Placeholder: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: string;
            WFResourceClass: string;
        }[];
        DefaultValue?: undefined;
        Items?: undefined;
    })[];
    WFTextComponentsMode: string;
};
export { identifier, icon, WFAction };
