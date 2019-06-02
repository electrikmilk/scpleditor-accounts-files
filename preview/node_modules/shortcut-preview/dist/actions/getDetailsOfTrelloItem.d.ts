declare const identifier = "is.workflow.actions.properties.trello";
declare const icon = "Trello";
declare const WFAction: {
    ActionClass: string;
    AppIdentifier: string;
    CreationDate: string;
    Input: {
        Multiple: boolean;
        Required: boolean;
        Types: string[];
    };
    Name: string;
    RequiredResources: string[];
    WFContentItemClass: string;
};
export { identifier, icon, WFAction };
