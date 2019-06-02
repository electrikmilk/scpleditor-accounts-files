"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.detect.address';
exports.identifier = identifier;
var icon = 'Maps';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFCoercionAction',
  ActionKeywords: ['address', 'street', 'detect', 'scan', 'map'],
  AppIdentifier: 'com.apple.Maps',
  CoercionItemClass: 'WFLocationContentItem',
  Description: {
    DescriptionSummary: 'Returns any street addresses found in the output from the previous action.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFStreetAddress']
  },
  Name: 'Get Addresses from Input',
  Output: {
    Multiple: true,
    OutputName: 'Addresses',
    Types: ['WFLocationContentItem']
  },
  ShortName: 'Get Addresses'
};
exports.WFAction = WFAction;