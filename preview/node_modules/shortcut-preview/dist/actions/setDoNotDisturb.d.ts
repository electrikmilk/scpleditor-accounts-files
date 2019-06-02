declare const identifier = "is.workflow.actions.dnd.set";
declare const icon = "DoNotDisturb";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionSummary: string;
    };
    InputPassthrough: boolean;
    IntentIdentifier: string;
    Name: string;
    Parameters: ({
        Class: string;
        DefaultValue: boolean;
        IntentSlotName: string;
        Key: string;
        Label: string;
        Items?: undefined;
        RequiredResources?: undefined;
        Description?: undefined;
        HintDisplayMode?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
        RequiredResources: ({
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
            WFDeviceAttributes?: undefined;
        } | {
            WFDeviceAttributes: {
                WFDeviceAttributeSystemVersion: {
                    WFSystemVersion: string;
                    WFSystemVersionRelation: string;
                };
            };
            WFResourceClass: string;
            WFParameterKey?: undefined;
            WFParameterValue?: undefined;
        })[];
        IntentSlotName?: undefined;
        Description?: undefined;
        HintDisplayMode?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    } | {
        Class: string;
        Description: string;
        IntentSlotName: string;
        Key: string;
        Label: string;
        RequiredResources: ({
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
            WFDeviceAttributes?: undefined;
        } | {
            WFParameterKey: string;
            WFParameterValue: string;
            WFResourceClass: string;
            WFDeviceAttributes?: undefined;
        } | {
            WFDeviceAttributes: {
                WFDeviceAttributeSystemVersion: {
                    WFSystemVersion: string;
                    WFSystemVersionRelation: string;
                };
            };
            WFResourceClass: string;
            WFParameterKey?: undefined;
            WFParameterValue?: undefined;
        })[];
        DefaultValue?: undefined;
        Items?: undefined;
        HintDisplayMode?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
    } | {
        Class: string;
        Description: string;
        HintDisplayMode: string;
        IntentSlotName: string;
        Key: string;
        Label: string;
        Placeholder: string;
        RequiredResources: ({
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
            WFDeviceAttributes?: undefined;
        } | {
            WFParameterKey: string;
            WFParameterValue: string;
            WFResourceClass: string;
            WFDeviceAttributes?: undefined;
        } | {
            WFDeviceAttributes: {
                WFDeviceAttributeSystemVersion: {
                    WFSystemVersion: string;
                    WFSystemVersionRelation: string;
                };
            };
            WFResourceClass: string;
            WFParameterKey?: undefined;
            WFParameterValue?: undefined;
        })[];
        TextAlignment: string;
        DefaultValue?: undefined;
        Items?: undefined;
    })[];
};
export { identifier, icon, WFAction };
