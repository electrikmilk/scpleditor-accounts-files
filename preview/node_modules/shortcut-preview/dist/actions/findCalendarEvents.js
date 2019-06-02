"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.filter.calendarevents';
exports.identifier = identifier;
var icon = 'Calendar';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFContentItemFilterAction',
  AppIdentifier: 'com.apple.mobilecal',
  CreationDate: '2015-01-22T08:00:00.000Z',
  Name: 'Find Calendar Events',
  RequiredResources: ['WFCalendarAccessResource'],
  ShortName: 'Find Events',
  SuggestedAsInitialAction: false,
  WFContentItemClass: 'WFCalendarEventContentItem',
  WFContentItemDefaultProperty: 'Calendar'
};
exports.WFAction = WFAction;