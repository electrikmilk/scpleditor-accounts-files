"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.text.replace';
exports.identifier = identifier;
var icon = 'Text';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFReplaceTextAction',
  ActionKeywords: ['finding', 'matching', 'searching', 'regular', 'expression', 'regexp'],
  Description: {
    DescriptionSummary: 'Replaces some text passed into the action with other text.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSString']
  },
  InputPassthrough: false,
  Name: 'Replace Text',
  Output: {
    Multiple: true,
    OutputName: 'Replace Text',
    Types: ['NSString']
  },
  Parameters: [{
    Class: 'WFTextInputParameter',
    Description: 'The text to be replaced.',
    Key: 'WFReplaceTextFind',
    Label: 'Find Text',
    Placeholder: 'hello'
  }, {
    Class: 'WFTextInputParameter',
    Description: 'The text to replace all occurrences of Find Text.',
    Key: 'WFReplaceTextReplace',
    Label: 'Replace With',
    Placeholder: 'world'
  }, {
    Class: 'WFSwitchParameter',
    DefaultValue: true,
    Description: 'When disabled, the capitalization of letters is ignored.',
    Key: 'WFReplaceTextCaseSensitive',
    Label: 'Case Sensitive'
  }, {
    Class: 'WFSwitchParameter',
    DefaultValue: false,
    Description: 'When enabled, Find Text is treated as a regular expression.',
    Key: 'WFReplaceTextRegularExpression',
    Label: 'Regular Expression'
  }]
};
exports.WFAction = WFAction;