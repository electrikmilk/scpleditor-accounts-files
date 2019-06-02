"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.previewdocument';
exports.identifier = identifier;
var icon = 'QuickLook';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFQuickLookAction',
  ActionKeywords: ['preview', 'show', 'file', 'document', 'quicklook', 'quick', 'look'],
  Description: {
    DescriptionSummary: 'Displays a preview of the input.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['public.data']
  },
  InputPassthrough: true,
  Name: 'Quick Look',
  Parameters: [{
    Class: 'WFSwitchParameter',
    Key: 'WFQuickLookActionFullScreen',
    Label: 'Full Screen',
    RequiredResources: [{
      WFDeviceAttributes: {
        WFDeviceAttributeIdiom: 'Pad'
      },
      WFResourceClass: 'WFDeviceAttributesResource'
    }]
  }],
  RequiredResources: ['WFUserInteractionResource'],
  UserInterfaces: ['WatchKit', 'UIKit']
};
exports.WFAction = WFAction;