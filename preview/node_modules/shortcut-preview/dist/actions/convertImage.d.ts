declare const identifier = "is.workflow.actions.image.convert";
declare const icon = "Image";
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
        Key: string;
        Label: string;
        Description?: undefined;
        RequiredResources?: undefined;
    } | {
        Class: string;
        DefaultValue: number;
        Description: string;
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValues: string[];
            WFResourceClass: string;
        }[];
    } | {
        Class: string;
        DefaultValue: boolean;
        Description: string;
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValues: string[];
            WFResourceClass: string;
        }[];
    })[];
};
export { identifier, icon, WFAction };
