"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.share';
exports.identifier = identifier;
var icon = 'Sharing';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFShareAction',
  ActionKeywords: ['share', 'file', 'document', 'send'],
  Description: {
    DescriptionSummary: 'Prompts to share the input.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem']
  },
  InputPassthrough: true,
  Name: 'Share',
  RequiredResources: ['WFUserInteractionResource'],
  UserInterfaces: ['UIKit', 'WatchKit']
};
exports.WFAction = WFAction;