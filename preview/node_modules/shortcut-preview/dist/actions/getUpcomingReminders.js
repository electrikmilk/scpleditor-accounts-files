"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getupcomingreminders';
exports.identifier = identifier;
var icon = 'Reminders';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetUpcomingCalendarItemsAction',
  ActionKeywords: ['calendar', 'reminder', 'next', 'upcoming'],
  AppIdentifier: 'com.apple.reminders',
  Description: {
    DescriptionSummary: 'Gets upcoming reminders, ordered from nearest to farthest away due date.'
  },
  LastModifiedDate: '2015-02-03T08:00:00.000Z',
  Name: 'Get Upcoming Reminders',
  Output: {
    Multiple: true,
    OutputName: 'Upcoming Reminders',
    Types: ['EKReminder']
  },
  Parameters: [{
    AllowsAllCalendars: true,
    Class: 'WFCalendarPickerParameter',
    EventKitEntityType: 'Reminder',
    Key: 'WFGetUpcomingItemCalendar',
    Label: 'List'
  }, {
    Class: 'WFStepperParameter',
    DefaultValue: 1,
    Key: 'WFGetUpcomingItemCount',
    StepperDescription: 'Number of Reminders',
    StepperNoun: 'Reminder',
    StepperPluralNoun: 'Reminders',
    StepperPrefix: 'Get'
  }],
  RequiredResources: ['WFReminderAccessResource'],
  ShortName: 'Get Reminders',
  WFGetUpcomingItemType: 1
};
exports.WFAction = WFAction;