"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.selectemail';
exports.identifier = identifier;
var icon = 'Mail';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFSelectContactsAction',
  ActionKeywords: ['select', 'email', 'address', 'e-mail', 'addressbook'],
  AppIdentifier: 'com.apple.mobilemail',
  ContactProperties: ['Email'],
  Description: {
    DescriptionSummary: 'Prompts to pick an email address from your contacts and passes the selection to the next action.'
  },
  InputPassthrough: false,
  Name: 'Select Email Address',
  Output: {
    Multiple: true,
    OutputName: 'Email Addresses',
    Types: ['WFEmailAddress']
  },
  RequiredResources: ['WFUserInteractionResource', 'WFContactAccessResource'],
  ShortName: 'Select Email',
  SuggestedAsInitialAction: false,
  UserInterfaces: ['UIKit', 'WatchKit']
};
exports.WFAction = WFAction;