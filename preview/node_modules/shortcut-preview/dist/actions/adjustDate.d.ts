declare const identifier = "is.workflow.actions.adjustdate";
declare const icon = "Date";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    CreationDate: string;
    Description: {
        DescriptionNote: string;
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
    Parameters: {
        Class: string;
        Key: string;
    }[];
    RequiredResources: {
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        }[];
        WFResourceClass: string;
    }[];
};
export { identifier, icon, WFAction };
