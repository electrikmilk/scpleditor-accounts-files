"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.removereminders';
exports.identifier = identifier;
var icon = 'Reminders';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFRemoveCalendarItemsAction',
  ActionKeywords: ['calendar', 'delete'],
  AppIdentifier: 'com.apple.reminders',
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionNote: 'This is a destructive and permanent action. You will be asked to confirm before reminders are removed.',
    DescriptionSummary: 'Removes all reminders passed into the action from the lists they are contained in.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['EKReminder']
  },
  InputPassthrough: false,
  Name: 'Remove Reminders',
  RequiredResources: ['WFReminderAccessResource', 'WFUserInteractionResource'],
  WFCalendarItemEntityType: 'Reminder'
};
exports.WFAction = WFAction;