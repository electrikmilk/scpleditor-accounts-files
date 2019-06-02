declare const identifier = "is.workflow.actions.file.delete";
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
        Types: string[];
    };
    Name: string;
    Parameters: {
        Class: string;
        DefaultValue: boolean;
        Description: string;
        Key: string;
        Label: string;
    }[];
};
export { identifier, icon, WFAction };
