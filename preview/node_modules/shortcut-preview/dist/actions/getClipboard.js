"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getclipboard';
exports.identifier = identifier;
var icon = 'Clipboard';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetClipboardAction',
  ActionKeywords: ['text', 'clipboard', 'copy', 'paste', 'contents', 'of'],
  Description: {
    DescriptionSummary: 'Passes the contents of the clipboard to the next action.'
  },
  Name: 'Get Clipboard',
  Output: {
    Multiple: true,
    OutputName: 'Clipboard',
    Types: ['WFContentItem']
  },
  RequiredResources: ['WFMainThreadResource'],
  UnsupportedEnvironments: ['Background']
};
exports.WFAction = WFAction;