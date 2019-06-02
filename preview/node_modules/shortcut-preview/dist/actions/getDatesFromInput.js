"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.detect.date';
exports.identifier = identifier;
var icon = 'Date';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFCoercionAction',
  ActionKeywords: ['date', 'time', 'detect', 'scan'],
  CoercionItemClass: 'WFDateContentItem',
  Description: {
    DescriptionSummary: 'Returns any dates found in the output from the previous action.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSDate']
  },
  Name: 'Get Dates from Input',
  Output: {
    Multiple: true,
    OutputName: 'Dates',
    Types: ['WFDateContentItem']
  },
  ShortName: 'Get Dates'
};
exports.WFAction = WFAction;