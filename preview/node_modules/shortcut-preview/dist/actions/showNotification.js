"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.notification';
exports.identifier = identifier;
var icon = 'Notification';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFNotificationAction',
  ActionKeywords: ['local', 'notification', 'show', 'alert', 'reminder', 'push'],
  Description: {
    DescriptionInput: 'An image or video to include in the notification',
    DescriptionSummary: 'Displays a local notification.'
  },
  Input: {
    Multiple: true,
    Required: false,
    Types: ['UIImage', 'AVAsset']
  },
  InputPassthrough: true,
  LastModifiedDate: '2016-09-10T07:00:00.000Z',
  Name: 'Show Notification',
  Parameters: [{
    Class: 'WFTextInputParameter',
    DisallowedVariableTypes: ['Ask'],
    Key: 'WFNotificationActionTitle',
    Label: 'Title',
    Placeholder: 'optional'
  }, {
    Class: 'WFTextInputParameter',
    DefaultValue: 'Hello World',
    DisallowedVariableTypes: ['Ask'],
    Key: 'WFNotificationActionBody',
    Label: 'Body',
    Multiline: true,
    Placeholder: 'Charming notification message'
  }, {
    Class: 'WFSwitchParameter',
    DefaultValue: true,
    Key: 'WFNotificationActionSound',
    Label: 'Play Sound'
  }],
  RequiredResources: ['WFUserInteractionResource', 'WFMainThreadResource', 'WFLocalNotificationAccessResource'],
  UserInterfaces: ['UIKit', 'UIKitWidget', 'WatchKit']
};
exports.WFAction = WFAction;