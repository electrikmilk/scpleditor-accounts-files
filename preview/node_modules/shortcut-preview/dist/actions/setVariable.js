"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.setvariable';
exports.identifier = identifier;
var icon = 'Variable';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFSetVariableAction',
  ActionKeywords: ['programming', 'scripting', 'var'],
  Description: {
    DescriptionSummary: 'Sets the value of the specified variable to the input of this action.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem']
  },
  InputPassthrough: true,
  Name: 'Set Variable',
  Parameters: [{
    Class: 'WFVariableFieldParameter',
    Key: 'WFVariableName',
    Label: 'Variable',
    Placeholder: 'Variable Name',
    TextAlignment: 'Right'
  }]
};
exports.WFAction = WFAction;