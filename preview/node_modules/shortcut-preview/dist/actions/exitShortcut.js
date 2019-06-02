"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.exit';
exports.identifier = identifier;
var icon = 'Scripting';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFExitAction',
  ActionKeywords: ['quit', 'return', 'workflow'],
  Description: {
    DescriptionSummary: 'Stops execution of the current shortcut and dismisses the shortcut on screen. No more actions will be run after this action.'
  },
  Input: {
    Multiple: true,
    Required: false,
    Types: ['WFContentItem']
  },
  LastModifiedDate: '2015-08-20T07:00:00.000Z',
  Name: 'Exit Shortcut',
  RequiredResources: ['WFMainThreadResource'],
  SuggestedNever: true
};
exports.WFAction = WFAction;