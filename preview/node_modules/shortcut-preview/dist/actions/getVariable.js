"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getvariable';
exports.identifier = identifier;
var icon = 'Variable';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetVariableAction',
  ActionKeywords: ['programming', 'scripting', 'var'],
  Description: {
    DescriptionSummary: 'Gets the value of the specified variable and passes it to the next action.'
  },
  Name: 'Get Variable',
  Output: {
    Multiple: true,
    OutputName: 'Variable',
    Types: ['WFContentItem']
  },
  Parameters: [{
    Class: 'WFVariablePickerParameter',
    DisallowedVariableTypes: ['Clipboard'],
    Key: 'WFVariable',
    Label: 'Variable'
  }]
};
exports.WFAction = WFAction;