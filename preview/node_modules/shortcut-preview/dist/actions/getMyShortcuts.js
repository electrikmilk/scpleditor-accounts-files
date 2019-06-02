"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getmyworkflows';
exports.identifier = identifier;
var icon = 'Shortcuts';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetMyWorkflowsAction',
  ActionKeywords: ['installed', 'downloaded', 'workflow'],
  AppIdentifier: 'is.workflow.my.app',
  CreationDate: '2015-08-16T05:00:00.000Z',
  Description: {
    DescriptionSummary: 'Gets the shortcuts stored on this device. For example, you could use this action with the Make Archive action to zip up your shortcuts.'
  },
  Name: 'Get My Shortcuts',
  Output: {
    Multiple: true,
    OutputName: 'My Shortcuts',
    Types: ['WFWorkflow']
  },
  SuggestedNever: true
};
exports.WFAction = WFAction;