"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.showresult';
exports.identifier = identifier;
var icon = 'Scripting';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFShowResultAction',
  ActionKeywords: ['text', 'such text', 'very speech', 'much words', 'so wow', 'string'],
  Description: {
    DescriptionSummary: 'Shows the specified text in Siri or in an alert.'
  },
  InputPassthrough: true,
  Name: 'Show Result',
  Parameters: [{
    Class: 'WFTextInputParameter',
    DefaultValue: '',
    Key: 'Text',
    Multiline: true,
    Placeholder: 'Enter text...'
  }],
  RequiredResources: ['WFMainThreadResource']
};
exports.WFAction = WFAction;