"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.detect.text';
exports.identifier = identifier;
var icon = 'Text';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFCoercionAction',
  ActionKeywords: ['find', 'search', 'detect', 'scan', 'e-mail', 'emails'],
  CoercionItemClass: 'WFStringContentItem',
  Description: {
    DescriptionSummary: "Returns text from the previous action's output.\n\nFor example, this action can get the name of a photo or song, or the text of a web page."
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem']
  },
  Name: 'Get Text from Input',
  Output: {
    Multiple: true,
    OutputName: 'Text',
    Types: ['WFStringContentItem']
  },
  ShortName: 'Get Text'
};
exports.WFAction = WFAction;