"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getwebpagecontents';
exports.identifier = identifier;
var icon = 'Safari';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetWebPageAction',
  AppIdentifier: 'com.apple.mobilesafari',
  Description: {
    DescriptionSummary: 'Extracts the contents of the web pages passed into the action.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFURLContentItem']
  },
  Name: 'Get Contents of Web Page',
  Output: {
    Multiple: true,
    OutputName: 'Contents of Web Page',
    Types: ['NSAttributedString']
  },
  ShortName: 'Get Web Page',
  UnsupportedEnvironments: ['MemoryConstrained']
};
exports.WFAction = WFAction;