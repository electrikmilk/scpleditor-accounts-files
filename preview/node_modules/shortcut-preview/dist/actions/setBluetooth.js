"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.bluetooth.set';
exports.identifier = identifier;
var icon = 'Bluetooth';
exports.icon = icon;
var WFAction = {
  ACECommandClass: 'SASettingSetBluetooth',
  ACESettingValueKey: 'OnValue',
  ActionClass: 'WFACESetSettingAction',
  ActionKeywords: ['wireless', 'accessories', 'accessory'],
  Description: {
    DescriptionSummary: 'Sets the device’s Bluetooth to on or off.'
  },
  InputPassthrough: true,
  Name: 'Set Bluetooth',
  Parameters: [{
    Class: 'WFSwitchParameter',
    DefaultValue: true,
    Key: 'OnValue',
    Label: 'Bluetooth'
  }],
  RequiredResources: ['WFSiriAccessResource'],
  UnsupportedEnvironments: ['WatchOS']
};
exports.WFAction = WFAction;