declare const identifier = "com.apple.facetime.facetime";
declare const icon = "FaceTime";
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
    Parameters: ({
        Class: string;
        DefaultValue: string;
        Hidden: boolean;
        IntentName: string;
        Key: string;
        Label: string;
        Items?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
        Hidden?: undefined;
        IntentName?: undefined;
    })[];
    RequiredResources: string[];
    WFStartCallActionType: string;
};
export { identifier, icon, WFAction };
