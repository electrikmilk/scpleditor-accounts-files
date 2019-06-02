"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getdirections';
exports.identifier = identifier;
var icon = 'Maps';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetDirectionsAction',
  ActionKeywords: ['get', 'maps', 'search', 'query', 'place', 'location', 'find', 'waze', 'google', 'transit', 'citymapper'],
  AppIdentifier: 'com.apple.Maps',
  Description: {
    DescriptionInput: 'The destination address',
    DescriptionSummary: 'Open directions to the location passed into this action in your choice of Maps, Google Maps, Citymapper, Transit, or Waze. For example, you can use this action to get directions to an upcoming event on your calendar.'
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['NSString', 'CLLocation', 'MKMapItem']
  },
  InputPassthrough: true,
  Name: 'Show Directions',
  Parameters: [{
    Class: 'WFMapsAppPickerParameter',
    DefaultValue: 'Maps',
    Key: 'WFGetDirectionsActionApp',
    Label: 'Maps App',
    SupportedApps: ['Maps', 'Citymapper', 'Google Maps', 'Transit', 'Waze']
  }, {
    Class: 'WFDynamicEnumerationParameter',
    DefaultValue: 'Driving',
    Key: 'WFGetDirectionsActionMode',
    Label: 'Mode',
    RequiredResources: [{
      WFParameterKey: 'WFGetDirectionsActionApp',
      WFParameterValues: ['Maps', 'Google Maps', 'Transit', 'Waze'],
      WFResourceClass: 'WFParameterRelationResource'
    }]
  }],
  RequiredResources: ['WFURLOpenResource'],
  UserInterfaces: ['WatchKit', 'UIKit', 'UIKitWidget']
};
exports.WFAction = WFAction;