declare const identifier = "is.workflow.actions.runjavascriptonwebpage";
declare const icon = "Safari";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    Description: {
        DescriptionInput: string;
        DescriptionNote: string;
        DescriptionResult: string;
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
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: {
        AutocapitalizationType: string;
        Class: string;
        DefaultValue: string;
        DisableAutocorrection: boolean;
        DisableSmartDashes: boolean;
        DisableSmartQuotes: boolean;
        Key: string;
        Label: string;
        Multiline: boolean;
        Placeholder: string;
        SyntaxHighlightingType: string;
    }[];
    RequiredResources: {
        WFDeviceAttributes: {
            WFDeviceAttributeSystemVersion: {
                WFSystemVersion: string;
                WFSystemVersionRelation: string;
            };
        };
        WFResourceClass: string;
    }[];
    ShortName: string;
    SuggestedNever: boolean;
};
export { identifier, icon, WFAction };
