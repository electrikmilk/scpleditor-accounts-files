declare const identifier = "is.workflow.actions.trimvideo";
declare const icon = "QuickTime";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
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
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    RequiredResources: string[];
    UserInterfaces: string[];
};
export { identifier, icon, WFAction };
