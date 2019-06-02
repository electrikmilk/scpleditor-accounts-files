"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.detect.contacts';
exports.identifier = identifier;
var icon = 'Contacts';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFCoercionAction',
  ActionKeywords: ['find', 'detect', 'people', 'person', 'email', 'e-mail', 'phone'],
  AppIdentifier: 'com.apple.MobileAddressBook',
  CoercionItemClass: 'WFContactContentItem',
  Description: {
    DescriptionSummary: 'Gets contacts from the result of the previous action.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContact']
  },
  Name: 'Get Contacts from Input',
  Output: {
    Multiple: true,
    OutputName: 'Contacts',
    Types: ['WFContactContentItem']
  },
  RequiredResources: ['WFContactAccessResource'],
  ShortName: 'Get Contacts'
};
exports.WFAction = WFAction;