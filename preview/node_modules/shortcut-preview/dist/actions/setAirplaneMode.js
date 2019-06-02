"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.airplanemode.set';
exports.identifier = identifier;
var icon = 'AirplaneMode';
exports.icon = icon;
var WFAction = {
  ACECommandClass: 'SASettingSetAirplaneMode',
  ACESettingValueKey: 'OnValue',
  ActionClass: 'WFACESetSettingAction',
  ActionKeywords: ['airport', 'wi-fi', 'bluetooth', 'cellular'],
  Description: {
    DescriptionSummary: 'Sets the device’s Airplane Mode to on or off.'
  },
  InputPassthrough: true,
  Name: 'Set Airplane Mode',
  Parameters: [{
    Class: 'WFSwitchParameter',
    DefaultValue: true,
    Key: 'OnValue',
    Label: 'Airplane Mode'
  }],
  RequiredResources: ['WFSiriAccessResource'],
  UnsupportedEnvironments: ['WatchOS']
};
exports.WFAction = WFAction;