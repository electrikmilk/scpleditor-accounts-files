"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getdevicedetails';
exports.identifier = identifier;
var icon = 'Scripting';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetDeviceDetailsAction',
  ActionKeywords: ['name', 'model', 'screen', 'dimensions', 'version', 'system', 'os', 'ios', 'software', 'current', 'brightness', 'volume', 'firmware'],
  CreationDate: '2016-03-07T08:00:00.000Z',
  Description: {
    DescriptionSummary: 'Gets information about the current device.'
  },
  InputPassthrough: false,
  Name: 'Get Device Details',
  Output: {
    Multiple: false,
    OutputName: 'Device Details',
    Types: ['NSString', 'NSNumber']
  },
  Parameters: [{
    Class: 'WFEnumerationParameter',
    DefaultValue: 'Device Name',
    Items: ['Device Name', 'Device Model', 'System Version', 'Screen Width', 'Screen Height', 'Current Volume', 'Current Brightness'],
    Key: 'WFDeviceDetail',
    Label: 'Get'
  }],
  ShortName: 'Device Details',
  SuggestedAsInitialAction: false
};
exports.WFAction = WFAction;