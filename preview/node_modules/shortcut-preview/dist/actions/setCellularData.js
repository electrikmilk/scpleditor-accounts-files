"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.cellulardata.set';
exports.identifier = identifier;
var icon = 'CellularData';
exports.icon = icon;
var WFAction = {
  ACECommandClass: 'SASettingSetCellularData',
  ACESettingValueKey: 'OnValue',
  ActionClass: 'WFACESetSettingAction',
  ActionKeywords: ['service', 'phone', 'airplane'],
  Description: {
    DescriptionSummary: 'Sets the device’s Cellular Data to on or off.'
  },
  InputPassthrough: true,
  Name: 'Set Cellular Data',
  Parameters: [{
    Class: 'WFSwitchParameter',
    DefaultValue: true,
    Key: 'OnValue',
    Label: 'Cellular Data'
  }],
  RequiredResources: ['WFSiriAccessResource'],
  UnsupportedEnvironments: ['WatchOS']
};
exports.WFAction = WFAction;