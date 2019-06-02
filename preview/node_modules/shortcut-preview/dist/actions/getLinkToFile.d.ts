declare const identifier = "is.workflow.actions.file.getlink";
declare const icon = "Documents";
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
        Types: never[];
    };
    Name: string;
    Output: {
        Multiple: boolean;
        Types: string[];
    };
    OutputName: string;
    ShortName: string;
};
export { identifier, icon, WFAction };
