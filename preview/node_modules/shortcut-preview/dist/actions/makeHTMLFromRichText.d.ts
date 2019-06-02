declare const identifier = "is.workflow.actions.gethtmlfromrichtext";
declare const icon = "RichText";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
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
    Parameters: {
        Class: string;
        Description: string;
        Key: string;
        Label: string;
    }[];
    ShortName: string;
};
export { identifier, icon, WFAction };
