"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getmapslink';
exports.identifier = identifier;
var icon = 'Maps';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetMapsLinkAction',
  ActionKeywords: ['link', 'location', 'app'],
  AppIdentifier: 'com.apple.Maps',
  Description: {
    DescriptionSummary: 'Creates a URL to search for the location, place, or text that was passed into the action in a separate maps app.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSString', 'CLLocation', 'MKMapItem']
  },
  Name: 'Get Maps URL',
  Output: {
    Multiple: true,
    OutputName: 'Maps URL',
    Types: ['NSURL']
  }
};
exports.WFAction = WFAction;