"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.openurl';
exports.identifier = identifier;
var icon = 'Safari';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFOpenURLAction',
  ActionKeywords: ['URL', 'web', 'display', 'site', 'open', 'show', 'multiple'],
  AppIdentifier: 'com.apple.mobilesafari',
  Description: {
    DescriptionSummary: 'Opens URLs passed into the action in Safari.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSURL']
  },
  InputPassthrough: true,
  IntentIdentifier: 'sirikit.intents.custom.com.apple.mobilesafari.OpenURLsIntent',
  LastModifiedDate: '2015-12-14T08:00:00.000Z',
  Name: 'Open URLs',
  Parameters: [],
  RequiredResources: ['WFURLOpenResource']
};
exports.WFAction = WFAction;