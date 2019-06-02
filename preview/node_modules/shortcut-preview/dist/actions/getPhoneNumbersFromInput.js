"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.detect.phonenumber';
exports.identifier = identifier;
var icon = 'PhoneNumber';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFCoercionAction',
  ActionKeywords: ['phone', 'number', 'detect', 'scan'],
  CoercionItemClass: 'WFPhoneNumberContentItem',
  Description: {
    DescriptionSummary: 'Returns any phone numbers found in the output from the previous action.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFPhoneNumber']
  },
  Name: 'Get Phone Numbers from Input',
  Output: {
    Multiple: true,
    OutputName: 'Phone Numbers',
    Types: ['WFPhoneNumberContentItem']
  }
};
exports.WFAction = WFAction;