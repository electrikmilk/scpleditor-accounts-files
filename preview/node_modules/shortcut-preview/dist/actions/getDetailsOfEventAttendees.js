"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.properties.eventattendees';
exports.identifier = identifier;
var icon = 'Calendar';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFContentItemPropertiesAction',
  AppIdentifier: 'com.apple.mobilecal',
  CreationDate: '2015-01-22T08:00:00.000Z',
  Name: 'Get Details of Event Attendees',
  WFContentItemClass: 'WFEKParticipantContentItem'
};
exports.WFAction = WFAction;