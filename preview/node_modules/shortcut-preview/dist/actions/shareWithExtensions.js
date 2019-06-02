"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.runextension';
exports.identifier = identifier;
var icon = 'Apps';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFRunExtensionAction',
  ActionKeywords: ['action', 'extension', 'sharing', 'share', 'ios 8', 'app', 'inter'],
  Description: {
    DescriptionSummary: 'Prompts to share the input using action extensions and sharing extensions provided by other apps.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem']
  },
  InputPassthrough: true,
  Name: 'Share with Extensions',
  RequiredResources: ['WFUserInteractionResource'],
  UserInterfaces: ['UIKit']
};
exports.WFAction = WFAction;