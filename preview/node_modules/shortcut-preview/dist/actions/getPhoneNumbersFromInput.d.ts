declare const identifier = "is.workflow.actions.detect.phonenumber";
declare const icon = "PhoneNumber";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    CoercionItemClass: string;
    Description: {
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
};
export { identifier, icon, WFAction };
