"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.hash';
exports.identifier = identifier;
var icon = 'Scripting';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGenerateHashAction',
  ActionKeywords: ['crypto'],
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionSummary: 'Generates a MD5/SHA1 hash from the input.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFGenericFileContentItem']
  },
  Name: 'Generate Hash',
  Output: {
    Multiple: true,
    OutputName: 'Hash',
    Types: ['NSString']
  },
  Parameters: [{
    Class: 'WFEnumerationParameter',
    DefaultValue: 'MD5',
    Items: ['MD5', 'SHA1', 'SHA256', 'SHA512'],
    Key: 'WFHashType',
    Label: 'Type'
  }],
  SuggestedNever: true
};
exports.WFAction = WFAction;