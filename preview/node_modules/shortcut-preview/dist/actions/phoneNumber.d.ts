declare const identifier = "is.workflow.actions.phonenumber";
declare const icon = "PhoneNumber";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionSummary: string;
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
        Key: string;
        Placeholder: string;
    }[];
    RequiredResources: string[];
};
export { identifier, icon, WFAction };
