declare const identifier = "is.workflow.actions.getclipboard";
declare const icon = "Clipboard";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionSummary: string;
    };
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    RequiredResources: string[];
    UnsupportedEnvironments: string[];
};
export { identifier, icon, WFAction };
