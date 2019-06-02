"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.handoff';
exports.identifier = identifier;
var icon = 'HandoffAction';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFHandoffAction',
  ActionKeywords: ['apple', 'watch', 'send', 'phone', 'transfer', 'switch', 'handoff', 'continuity', 'workflow'],
  CreationDate: '2015-08-20T07:00:00.000Z',
  Description: {
    DescriptionSummary: 'Switches into the Shortcuts app and continues to the next action.'
  },
  InputPassthrough: true,
  Name: 'Continue Shortcut in App',
  RequiredResources: ['WFUserInteractionResource']
};
exports.WFAction = WFAction;