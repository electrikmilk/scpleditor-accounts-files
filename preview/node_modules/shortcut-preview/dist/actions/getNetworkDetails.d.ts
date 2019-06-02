declare const identifier = "is.workflow.actions.getwifi";
declare const icon = "Wi-Fi";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
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
        DefaultValue?: undefined;
        Items?: undefined;
        RequiredResources?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: string;
            WFResourceClass: string;
        }[];
    })[];
    SuggestedNever: boolean;
};
export { identifier, icon, WFAction };
