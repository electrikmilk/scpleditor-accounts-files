declare const identifier = "is.workflow.actions.getcurrentlocation";
declare const icon = "Location";
declare const WFAction: {
    ActionClass: string;
    ActionKeywords: string[];
    Description: {
        DescriptionSummary: string;
    };
    Name: string;
    Output: {
        Multiple: boolean;
        OutputName: string;
        Types: string[];
    };
    RequiredResources: string[];
    ShortName: string;
    UnsupportedEnvironments: string[];
};
export { identifier, icon, WFAction };
