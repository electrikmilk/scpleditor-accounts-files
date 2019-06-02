declare const identifier = "is.workflow.actions.format.filesize";
declare const icon = "Calculator";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    CreationDate: string;
    Description: {
        DescriptionInput: string;
        DescriptionNote: string;
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Required: boolean;
        Types: string[];
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
    } | {
        Class: string;
        DefaultValue: boolean;
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterRelation: string;
            WFParameterValue: string;
            WFResourceClass: string;
        }[];
        Items?: undefined;
    })[];
};
export { identifier, icon, WFAction };
