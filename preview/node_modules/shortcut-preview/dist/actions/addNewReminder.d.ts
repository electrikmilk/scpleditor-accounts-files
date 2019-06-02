declare const identifier = "is.workflow.actions.addnewreminder";
declare const icon = "Reminders";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    CreationDate: string;
    Description: {
        DescriptionResult: string;
        DescriptionSummary: string;
    };
    InputPassthrough: boolean;
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: ({
        Class: string;
        Description: string;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        EventKitEntityType?: undefined;
        Items?: undefined;
        RequiredResources?: undefined;
        AllowsDecimalNumbers?: undefined;
        DefaultValue?: undefined;
        HintDisplayMode?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        Description: string;
        EventKitEntityType: string;
        Key: string;
        Label: string;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        Items?: undefined;
        RequiredResources?: undefined;
        AllowsDecimalNumbers?: undefined;
        DefaultValue?: undefined;
        HintDisplayMode?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        Description: string;
        Key: string;
        Label: string;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        EventKitEntityType?: undefined;
        Items?: undefined;
        RequiredResources?: undefined;
        AllowsDecimalNumbers?: undefined;
        DefaultValue?: undefined;
        HintDisplayMode?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        Items: string[];
        Key: string;
        Label: string;
        RequiredResources: ({
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        } | {
            WFParameterKey: string;
            WFParameterValue: string;
            WFResourceClass: string;
        })[];
        Description?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        EventKitEntityType?: undefined;
        AllowsDecimalNumbers?: undefined;
        DefaultValue?: undefined;
        HintDisplayMode?: undefined;
        Multiline?: undefined;
    } | {
        AllowsDecimalNumbers: boolean;
        Class: string;
        DefaultValue: number;
        Description: string;
        Key: string;
        Label: string;
        Placeholder: string;
        RequiredResources: ({
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        } | {
            WFParameterKey: string;
            WFParameterValue: string;
            WFResourceClass: string;
        })[];
        TextAlignment: string;
        EventKitEntityType?: undefined;
        Items?: undefined;
        HintDisplayMode?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        Description: string;
        HintDisplayMode: string;
        Key: string;
        Label: string;
        Placeholder: string;
        RequiredResources: ({
            WFParameterKey: string;
            WFParameterValue: boolean;
            WFResourceClass: string;
        } | {
            WFParameterKey: string;
            WFParameterValue: string;
            WFResourceClass: string;
        })[];
        TextAlignment: string;
        EventKitEntityType?: undefined;
        Items?: undefined;
        AllowsDecimalNumbers?: undefined;
        DefaultValue?: undefined;
        Multiline?: undefined;
    } | {
        Class: string;
        Description: string;
        Key: string;
        Label: string;
        Multiline: boolean;
        Placeholder: string;
        TextAlignment?: undefined;
        EventKitEntityType?: undefined;
        Items?: undefined;
        RequiredResources?: undefined;
        AllowsDecimalNumbers?: undefined;
        DefaultValue?: undefined;
        HintDisplayMode?: undefined;
    })[];
    RequiredResources: string[];
    ShortName: string;
};
export { identifier, icon, WFAction };
