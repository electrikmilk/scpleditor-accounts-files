declare const identifier = "is.workflow.actions.showresult";
declare const icon = "Scripting";
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
        DefaultValue: string;
        Key: string;
        Multiline: boolean;
        Placeholder: string;
    }[];
    RequiredResources: string[];
};
export { identifier, icon, WFAction };
