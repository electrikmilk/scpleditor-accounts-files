"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.showincalendar';
exports.identifier = identifier;
var icon = 'Calendar';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFShowInCalendarAction',
  ActionKeywords: ['date', 'event', 'show', 'reveal'],
  AppIdentifier: 'com.apple.mobilecal',
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionSummary: 'Shows the date or calendar event passed as input in the Calendar app.'
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['WFDateContentItem', 'WFCalendarEventContentItem', 'WFTimeIntervalContentItem']
  },
  InputPassthrough: true,
  Name: 'Show in Calendar',
  RequiredResources: ['WFURLOpenResource']
};
exports.WFAction = WFAction;