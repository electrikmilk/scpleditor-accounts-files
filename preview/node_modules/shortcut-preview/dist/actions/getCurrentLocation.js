"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getcurrentlocation';
exports.identifier = identifier;
var icon = 'Location';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetCurrentLocationAction',
  ActionKeywords: ['gps', 'map', 'place', 'address'],
  Description: {
    DescriptionSummary: 'Gets the current location of the device.'
  },
  Name: 'Get Current Location',
  Output: {
    Multiple: false,
    OutputName: 'Current Location',
    Types: ['CLLocation']
  },
  RequiredResources: ['WFMainThreadResource', 'WFLocationAccessResource'],
  ShortName: 'Current Location',
  UnsupportedEnvironments: ['Background']
};
exports.WFAction = WFAction;