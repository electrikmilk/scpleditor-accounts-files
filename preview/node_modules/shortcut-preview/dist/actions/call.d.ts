declare const identifier = "com.apple.mobilephone.call";
declare const icon = "Phone";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    Description: {
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
    Parameters: {
        Class: string;
        DefaultValue: string;
        Hidden: boolean;
        IntentName: string;
        Key: string;
        Label: string;
    }[];
    RequiredResources: string[];
    WFStartCallActionType: string;
};
export { identifier, icon, WFAction };
