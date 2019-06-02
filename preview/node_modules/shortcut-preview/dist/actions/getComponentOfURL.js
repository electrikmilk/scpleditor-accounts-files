"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.geturlcomponent';
exports.identifier = identifier;
var icon = 'URL';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFURLGetComponentAction',
  ActionKeywords: ['Scheme', 'User', 'Password', 'Host', 'Port', 'Path', 'Query', 'Fragment'],
  Description: {
    DescriptionNote: 'URLs are structured as follows: scheme://user:password@host:port/path?query#fragment',
    DescriptionSummary: 'Gets the specified part of the URL passed into the action.'
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['WFURLContentItem']
  },
  InputPassthrough: false,
  Name: 'Get Component of URL',
  Output: {
    Multiple: false,
    OutputName: 'Component of URL',
    Types: ['NSString']
  },
  Parameters: [{
    Class: 'WFEnumerationParameter',
    DefaultValue: 'Scheme',
    Items: ['Scheme', 'User', 'Password', 'Host', 'Port', 'Path', 'Query', 'Fragment'],
    Key: 'WFURLComponent',
    Label: 'Component'
  }],
  ShortName: 'Get Component',
  SuggestedNever: true
};
exports.WFAction = WFAction;