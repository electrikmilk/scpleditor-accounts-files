declare const identifier = "is.workflow.actions.dictionary";
declare const icon = "Scripting";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    CreationDate: string;
    Description: {
        DescriptionNote: string;
        DescriptionSummary: string;
    };
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    Parameters: {
        AllowedValueTypes: number[];
        Class: string;
        Key: string;
        Label: string;
    }[];
    SuggestedNever: boolean;
};
export { identifier, icon, WFAction };
