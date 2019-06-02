"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.email';
exports.identifier = identifier;
var icon = 'Mail';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFEmailAddressAction',
  ActionKeywords: ['emails', 'e-mails', 'address'],
  AppIdentifier: 'com.apple.mobilemail',
  Description: {
    DescriptionSummary: 'Passes the specified email addresses to the next action.'
  },
  Name: 'Email Address',
  Output: {
    Multiple: true,
    OutputName: 'Email Address',
    Types: ['WFEmailAddress']
  },
  Parameters: [{
    Class: 'WFEmailAddressFieldParameter',
    Key: 'WFEmailAddress',
    Placeholder: 'Type in an email address'
  }],
  RequiredResources: ['WFContactAccessResource']
};
exports.WFAction = WFAction;