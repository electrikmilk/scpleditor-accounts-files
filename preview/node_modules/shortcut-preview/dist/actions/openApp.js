"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.openapp';
exports.identifier = identifier;
var icon = 'Apps';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFOpenAppAction',
  ActionKeywords: ['launch', 'run', 'switch'],
  Description: {
    DescriptionSummary: 'Opens the specified app.'
  },
  InputPassthrough: true,
  Name: 'Open App',
  Parameters: [{
    AppSearchType: 'OpenApp',
    Class: 'WFAppPickerParameter',
    Key: 'WFAppIdentifier',
    Label: 'App'
  }, {
    Class: 'WFTextInputParameter',
    Hidden: true,
    Key: 'WFAppName'
  }],
  RequiredResources: ['WFURLOpenResource'],
  SuggestedNever: true
};
exports.WFAction = WFAction;