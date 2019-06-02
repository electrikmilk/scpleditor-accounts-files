"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.removeevents';
exports.identifier = identifier;
var icon = 'Calendar';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFRemoveCalendarItemsAction',
  ActionKeywords: ['calendar', 'delete'],
  AppIdentifier: 'com.apple.mobilecal',
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionNote: 'This is a destructive and permanent action. You will be asked to confirm before events are removed.',
    DescriptionSummary: 'Removes all events passed into the action from the calendars they are contained in.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['EKEvent']
  },
  InputPassthrough: false,
  Name: 'Remove Events',
  Parameters: [{
    Class: 'WFSwitchParameter',
    DefaultValue: false,
    Description: 'When enabled, any repeats of an event in the future are also removed.',
    Key: 'WFCalendarIncludeFutureEvents',
    Label: 'Include Future Events'
  }],
  RequiredResources: ['WFCalendarAccessResource', 'WFUserInteractionResource'],
  WFCalendarItemEntityType: 'Event'
};
exports.WFAction = WFAction;