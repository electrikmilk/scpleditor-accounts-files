"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.alert';
exports.identifier = identifier;
var icon = 'Scripting';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFAlertAction',
  ActionKeywords: ['message', 'ask', 'display', 'prompt', 'show', 'confirmation'],
  Description: {
    DescriptionSummary: 'Displays an alert with a title, a message, and two buttons. If the user selects the OK button, the shortcut continues. The cancel button stops the shortcut.'
  },
  InputPassthrough: true,
  Name: 'Show Alert',
  Parameters: [{
    Class: 'WFTextInputParameter',
    DefaultValue: 'Alert',
    DisallowedVariableTypes: ['Ask'],
    Key: 'WFAlertActionTitle',
    Label: 'Title',
    Placeholder: 'Attention-grabbing title'
  }, {
    Class: 'WFTextInputParameter',
    DefaultValue: 'Do you want to continue?',
    DisallowedVariableTypes: ['Ask'],
    Key: 'WFAlertActionMessage',
    Label: 'Message',
    Multiline: true,
    Placeholder: 'Informational message'
  }, {
    Class: 'WFSwitchParameter',
    DefaultValue: true,
    DisallowedVariableTypes: ['Ask'],
    Key: 'WFAlertActionCancelButtonShown',
    Label: 'Show Cancel Button'
  }],
  RequiredResources: ['WFUserInteractionResource']
};
exports.WFAction = WFAction;