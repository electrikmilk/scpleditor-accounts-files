"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.gettext';
exports.identifier = identifier;
var icon = 'Text';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFTextAction',
  ActionKeywords: ['text', 'such text', 'very speech', 'much words', 'so wow', 'string'],
  Description: {
    DescriptionSummary: 'Passes the specified text to the next action.'
  },
  Name: 'Text',
  Output: {
    Multiple: false,
    OutputName: 'Text',
    Types: ['NSString']
  },
  Parameters: [{
    Class: 'WFTextInputParameter',
    DefaultValue: '',
    Key: 'WFTextActionText',
    Multiline: true,
    Placeholder: 'Enter text...'
  }]
};
exports.WFAction = WFAction;