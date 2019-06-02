"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.properties.contacts';
exports.identifier = identifier;
var icon = 'Contacts';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFContentItemPropertiesAction',
  AppIdentifier: 'com.apple.MobileAddressBook',
  CreationDate: '2015-01-22T08:00:00.000Z',
  Name: 'Get Details of Contacts',
  WFContentItemClass: 'WFContactContentItem'
};
exports.WFAction = WFAction;