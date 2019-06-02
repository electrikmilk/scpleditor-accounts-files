"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.detect.emailaddress';
exports.identifier = identifier;
var icon = 'Mail';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFCoercionAction',
  ActionKeywords: ['find', 'search', 'detect', 'scan', 'e-mail', 'emails'],
  AppIdentifier: 'com.apple.mobilemail',
  CoercionItemClass: 'WFEmailAddressContentItem',
  Description: {
    DescriptionSummary: 'Returns any email addresses found in the output from the previous action.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFEmailAddress']
  },
  Name: 'Get Email Addresses from Input',
  Output: {
    Multiple: true,
    OutputName: 'Email Addresses',
    Types: ['WFEmailAddressContentItem']
  },
  ShortName: 'Get Addresses'
};
exports.WFAction = WFAction;