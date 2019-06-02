declare const identifier = "is.workflow.actions.health.workout.log";
declare const icon = "Health";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    AppIdentifier: string;
    CreationDate: string;
    Description: {
        DescriptionSummary: string;
    };
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: ({
        Class: string;
        Key: string;
        Label: string;
        Description?: undefined;
        Placeholder?: undefined;
        TextAlignment?: undefined;
        AllowsDecimalNumbers?: undefined;
        QuantityType?: undefined;
        AutocapitalizationType?: undefined;
    } | {
        Class: string;
        Description: string;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        AllowsDecimalNumbers?: undefined;
        QuantityType?: undefined;
        AutocapitalizationType?: undefined;
    } | {
        AllowsDecimalNumbers: boolean;
        Class: string;
        Description: string;
        Key: string;
        Label: string;
        Placeholder: string;
        TextAlignment: string;
        QuantityType?: undefined;
        AutocapitalizationType?: undefined;
    } | {
        Class: string;
        Description: string;
        Key: string;
        Label: string;
        Placeholder: string;
        QuantityType: string;
        TextAlignment: string;
        AllowsDecimalNumbers?: undefined;
        AutocapitalizationType?: undefined;
    } | {
        AutocapitalizationType: string;
        Class: string;
        Description: string;
        Key: string;
        Label: string;
        Placeholder: string;
        QuantityType: string;
        TextAlignment: string;
        AllowsDecimalNumbers?: undefined;
    })[];
    RequiredResources: (string | {
        Resources: ({
            AccessType: string;
            ReadableType: string;
            ReadableObjectTypeIdentifier?: undefined;
        } | {
            AccessType: string;
            ReadableObjectTypeIdentifier: string;
            ReadableType: string;
        })[];
        WFResourceClass: string;
    })[];
};
export { identifier, icon, WFAction };
