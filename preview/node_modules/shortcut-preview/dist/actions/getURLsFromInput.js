"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.detect.link';
exports.identifier = identifier;
var icon = 'URL';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFCoercionAction',
  ActionKeywords: ['link', 'web', 'site', 'detect', 'scan'],
  CoercionItemClass: 'WFURLContentItem',
  Description: {
    DescriptionSummary: 'Returns any links found in the output from the previous action.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSURL']
  },
  Name: 'Get URLs from Input',
  Output: {
    Multiple: true,
    OutputName: 'URLs',
    Types: ['WFURLContentItem']
  },
  ShortName: 'Get URLs'
};
exports.WFAction = WFAction;