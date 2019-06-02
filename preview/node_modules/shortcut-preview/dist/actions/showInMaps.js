"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.searchmaps';
exports.identifier = identifier;
var icon = 'Maps';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFSearchMapsAction',
  ActionKeywords: ['maps', 'search', 'query', 'places', 'waze', 'google'],
  AppIdentifier: 'com.apple.Maps',
  Description: {
    DescriptionSummary: 'Opens your choice of Maps, Google Maps, or Waze and searches for the location, place, or text that was passed into the action.'
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['NSString', 'CLLocation', 'MKMapItem']
  },
  InputPassthrough: true,
  Name: 'Show in Maps',
  Parameters: [{
    Class: 'WFMapsAppPickerParameter',
    DefaultValue: 'Maps',
    Hidden: true,
    Key: 'WFSearchMapsActionApp',
    Label: 'Maps App',
    SupportedApps: ['Maps', 'Google Maps', 'Waze']
  }],
  ShortName: 'Show Map',
  UserInterfaces: ['UIKit', 'WatchKit']
};
exports.WFAction = WFAction;