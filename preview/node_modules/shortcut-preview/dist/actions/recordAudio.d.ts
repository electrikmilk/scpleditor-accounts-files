declare const identifier = "is.workflow.actions.recordaudio";
declare const icon = "Microphone";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    CreationDate: string;
    Description: {
        DescriptionSummary: string;
    };
    InputPassthrough: boolean;
    LastModifiedDate: string;
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: ({
        Class: string;
        DefaultValue: string;
        Description: string;
        Items: string[];
        Key: string;
        Label: string;
        RequiredResources?: undefined;
    } | {
        Class: string;
        DefaultValue: string;
        Items: string[];
        Key: string;
        Label: string;
        Description?: undefined;
        RequiredResources?: undefined;
    } | {
        Class: string;
        Key: string;
        Label: string;
        RequiredResources: {
            WFParameterKey: string;
            WFParameterValue: string;
            WFResourceClass: string;
        }[];
        DefaultValue?: undefined;
        Description?: undefined;
        Items?: undefined;
    })[];
    RequiredResources: string[];
    UnsupportedEnvironments: string[];
    UserInterfaces: string[];
};
export { identifier, icon, WFAction };
