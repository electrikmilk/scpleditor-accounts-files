"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.lowpowermode.set';
exports.identifier = identifier;
var icon = 'Battery';
exports.icon = icon;
var WFAction = {
  ACECommandClass: 'SASettingSetPowerSavingMode',
  ACESettingValueKey: 'OnValue',
  ActionClass: 'WFACESetSettingAction',
  ActionKeywords: ['battery', 'life', 'charge'],
  Description: {
    DescriptionSummary: 'Sets the device’s Low Power Mode to on or off.'
  },
  InputPassthrough: true,
  Name: 'Set Low Power Mode',
  Parameters: [{
    Class: 'WFSwitchParameter',
    DefaultValue: true,
    Key: 'OnValue',
    Label: 'Low Power Mode'
  }],
  RequiredResources: ['WFSiriAccessResource', {
    WFDeviceAttributes: {
      WFDeviceAttributeIdiom: 'Phone'
    },
    WFResourceClass: 'WFDeviceAttributesResource'
  }],
  UnsupportedEnvironments: ['WatchOS']
};
exports.WFAction = WFAction;