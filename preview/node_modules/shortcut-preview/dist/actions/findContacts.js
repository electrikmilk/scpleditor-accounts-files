"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.filter.contacts';
exports.identifier = identifier;
var icon = 'Contacts';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFContentItemFilterAction',
  AppIdentifier: 'com.apple.MobileAddressBook',
  CreationDate: '2015-01-22T08:00:00.000Z',
  LastModifiedDate: '2015-12-14T08:00:00.000Z',
  Name: 'Find Contacts',
  RequiredResources: ['WFContactAccessResource'],
  SuggestedAsInitialAction: false,
  WFContentItemClass: 'WFContactContentItem'
};
exports.WFAction = WFAction;