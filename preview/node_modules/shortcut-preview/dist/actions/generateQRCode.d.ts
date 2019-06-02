declare const identifier = "is.workflow.actions.generatebarcode";
declare const icon = "QRCode";
declare const WFAction: {
    ActionClass: string;
    Description: {
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Required: boolean;
        Types: string[];
    };
    LastModifiedDate: string;
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: {
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
    }[];
    ShortName: string;
};
export { identifier, icon, WFAction };
