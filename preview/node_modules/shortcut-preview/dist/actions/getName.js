"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getitemname';
exports.identifier = identifier;
var icon = 'Scripting';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetItemNameAction',
  ActionKeywords: ['title'],
  Description: {
    DescriptionSummary: 'Returns the name of every item passed as input. Depending on the input, this could be a file name, the title of a website, the title of a calendar event, etc.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem']
  },
  Name: 'Get Name',
  Output: {
    Multiple: true,
    OutputName: 'Name',
    Types: ['NSString']
  }
};
exports.WFAction = WFAction;