declare const identifier = "is.workflow.actions.filter.health.quantity";
declare const icon = "Health";
declare const WFAction: {
    ActionClass: string;
    AppIdentifier: string;
    CreationDate: string;
    Description: {
        DescriptionNote: string;
    };
    Name: string;
    RequiredResources: (string | {
        AccessType: string;
        ReadableObjectTypeIdentifierKeyPath: string;
        ReadableType: string;
        WFResourceClass: string;
    })[];
    SuggestedAsInitialAction: boolean;
    WFContentItemClass: string;
    WFContentItemDefaultProperty: string;
};
export { identifier, icon, WFAction };
