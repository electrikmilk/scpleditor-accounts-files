"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.filter.reminders';
exports.identifier = identifier;
var icon = 'Reminders';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFContentItemFilterAction',
  AppIdentifier: 'com.apple.reminders',
  CreationDate: '2015-01-22T08:00:00.000Z',
  Name: 'Find Reminders',
  RequiredResources: ['WFReminderAccessResource'],
  SuggestedAsInitialAction: false,
  WFContentItemClass: 'WFReminderContentItem',
  WFContentItemDefaultProperty: 'List'
};
exports.WFAction = WFAction;