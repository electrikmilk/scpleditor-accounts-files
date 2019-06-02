declare const identifier = "is.workflow.actions.setvolume";
declare const icon = "Sound";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionSummary: string;
    };
    InputPassthrough: boolean;
    Name: string;
    Parameters: {
        Class: string;
        DefaultValue: number;
        Description: string;
        Key: string;
        Label: string;
    }[];
};
export { identifier, icon, WFAction };
