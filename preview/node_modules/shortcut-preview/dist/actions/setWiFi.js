"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.wifi.set';
exports.identifier = identifier;
var icon = 'Wi-Fi';
exports.icon = icon;
var WFAction = {
  ACECommandClass: 'SASettingSetWiFi',
  ACESettingValueKey: 'OnValue',
  ActionClass: 'WFACESetWiFiAction',
  ActionKeywords: ['airport', 'wifi', 'wi-fi', 'wireless', 'internet', 'network', 'wlan'],
  Description: {
    DescriptionSummary: 'Sets the device’s Wi-Fi to on or off.'
  },
  InputPassthrough: true,
  Name: 'Set Wi-Fi',
  Parameters: [{
    Class: 'WFSwitchParameter',
    DefaultValue: true,
    Key: 'OnValue',
    Label: 'Wi-Fi'
  }],
  RequiredResources: ['WFSiriAccessResource'],
  UnsupportedEnvironments: ['WatchOS']
};
exports.WFAction = WFAction;