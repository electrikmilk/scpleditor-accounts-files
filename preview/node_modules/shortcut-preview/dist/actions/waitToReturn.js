"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.waittoreturn';
exports.identifier = identifier;
var icon = 'Scripting';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFWaitToReturnAction',
  ActionKeywords: ['wait'],
  Description: {
    DescriptionSummary: 'Pauses execution until you leave the Shortcuts app and return to it.\n\nThis action might be useful after an action that switches apps, to pause execution until you return to the Shortcuts app.'
  },
  InputPassthrough: true,
  Name: 'Wait to Return',
  RequiredResources: ['WFMainThreadResource']
};
exports.WFAction = WFAction;