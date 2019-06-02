declare const identifier = "is.workflow.actions.sendmessage";
declare const icon = "Messages";
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
    IntentIdentifier: string;
    LastModifiedDate: string;
    Name: string;
    Parameters: ({
        Class: string;
        DefaultValue: string;
        Hidden: boolean;
        IntentName: string;
        Key: string;
        Label: string;
        RequiredResources: {
            WFDeviceAttributes: {
                WFDeviceAttributeSystemVersion: {
                    WFSystemVersion: string;
                    WFSystemVersionRelation: string;
                };
            };
            WFResourceClass: string;
        }[];
        IntentSlotName?: undefined;
        Placeholder?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        DefaultValue: boolean;
        Key: string;
        Label: string;
        RequiredResources: {
            WFDeviceAttributes: {
                WFDeviceAttributeSystemVersion: {
                    WFSystemVersion: string;
                    WFSystemVersionRelation: string;
                };
            };
            WFResourceClass: string;
        }[];
        Hidden?: undefined;
        IntentName?: undefined;
        IntentSlotName?: undefined;
        Placeholder?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        IntentSlotName: string;
        Key: string;
        Label: string;
        Placeholder: string;
        DefaultValue?: undefined;
        Hidden?: undefined;
        IntentName?: undefined;
        RequiredResources?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        IntentSlotName: string;
        Key: string;
        Multiline: boolean;
        Placeholder: string;
        DefaultValue?: undefined;
        Hidden?: undefined;
        IntentName?: undefined;
        Label?: undefined;
        RequiredResources?: undefined;
    } | {
        Class: string;
        Hidden: boolean;
        Key: string;
        Label: string;
        DefaultValue?: undefined;
        IntentName?: undefined;
        RequiredResources?: undefined;
        IntentSlotName?: undefined;
        Placeholder?: undefined;
        Multiline?: undefined;
    })[];
    RateLimit: {
        Delay: number;
        Threshold: number;
        Timeout: number;
    };
    RequiredResources: string[];
    SuggestedAsInitialAction: boolean;
    UserInterfaces: string[];
};
export { identifier, icon, WFAction };
