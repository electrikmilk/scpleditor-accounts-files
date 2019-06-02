declare const identifier = "is.workflow.actions.text.translate";
declare const icon = "Translate";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    CreationDate: string;
    Description: {
        DescriptionNote: string;
        DescriptionSummary: string;
    };
    Input: {
        Multiple: boolean;
        Required: boolean;
        Types: string[];
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
        Key: string;
        Label: string;
        LanguageDetection: boolean;
    } | {
        Class: string;
        Key: string;
        Label: string;
        LanguageDetection?: undefined;
    })[];
};
export { identifier, icon, WFAction };
