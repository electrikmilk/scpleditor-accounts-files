declare const identifier = "is.workflow.actions.getlatestphotoimport";
declare const icon = "Photos";
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
    Parameters: never[];
    RequiredResources: string[];
};
export { identifier, icon, WFAction };
