"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.contacts';
exports.identifier = identifier;
var icon = 'Contacts';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFContactsAction',
  ActionKeywords: ['contact', 'person', 'people'],
  AppIdentifier: 'com.apple.MobileAddressBook',
  Description: {
    DescriptionSummary: 'Passes the specified contacts to the next action.'
  },
  Name: 'Contacts',
  Output: {
    Multiple: true,
    OutputName: 'Contacts',
    Types: ['WFContact']
  },
  Parameters: [{
    AllowsTextEntry: false,
    Class: 'WFContactFieldParameter',
    Key: 'WFContact',
    Placeholder: 'Press + to add contacts'
  }],
  RequiredResources: ['WFContactAccessResource']
};
exports.WFAction = WFAction;