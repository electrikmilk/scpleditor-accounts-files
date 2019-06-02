declare const identifier = "is.workflow.actions.playsound";
declare const icon = "Sound";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
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
    UnsupportedEnvironments: string[];
};
export { identifier, icon, WFAction };
