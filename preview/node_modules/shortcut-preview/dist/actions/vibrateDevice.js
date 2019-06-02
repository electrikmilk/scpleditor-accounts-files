"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.vibrate';
exports.identifier = identifier;
var icon = 'Notification';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFVibrateAction',
  ActionKeywords: ['vibration', 'taptic', 'haptic', 'notification', 'alert'],
  Description: {
    DescriptionSummary: 'Vibrates the device for a short amount of time.'
  },
  InputPassthrough: true,
  Name: 'Vibrate Device',
  Parameters: [{
    Class: 'WFEnumerationParameter',
    DefaultValue: 'Default',
    Description: 'When run on Apple Watch, the selected pattern will be tapped on to your wrist.',
    Hidden: true,
    Items: ['Default', 'Up Direction', 'Down Direction', 'Success', 'Failure', 'Retry', 'Start', 'Stop', 'Click'],
    Key: 'WFVibrateHapticType',
    Label: 'Haptic Pattern',
    RequiredResources: [{
      WFResourceClass: 'WFWorkflowTypeResource',
      WFWorkflowType: 'WatchKit'
    }]
  }],
  RequiredResources: [{
    WFDeviceAttributes: {
      WFDeviceAttributeCapabilities: ['Vibration']
    },
    WFResourceClass: 'WFDeviceAttributesResource'
  }]
};
exports.WFAction = WFAction;