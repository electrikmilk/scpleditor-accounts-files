"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.urlencode';
exports.identifier = identifier;
var icon = 'URL';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFURLEncodeAction',
  ActionKeywords: ['URL', 'encode', 'decode', 'x', 'callback', 'x-callback', 'xcallback'],
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionSummary: 'Encodes or decodes text passed into the action to be suitable for inclusion in a URL by adding or removing percent escapes when appropriate.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFStringContentItem']
  },
  Name: 'URL Encode',
  Output: {
    Multiple: true,
    OutputName: 'URL Encoded Text',
    Types: ['WFStringContentItem']
  },
  Parameters: [{
    Class: 'WFEnumerationParameter',
    DefaultValue: 'Encode',
    Items: ['Encode', 'Decode'],
    Key: 'WFEncodeMode',
    Label: 'Mode'
  }],
  SuggestedNever: true
};
exports.WFAction = WFAction;