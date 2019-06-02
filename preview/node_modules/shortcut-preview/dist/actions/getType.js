"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getitemtype';
exports.identifier = identifier;
var icon = 'Scripting';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetItemTypeAction',
  ActionKeywords: ['content', 'item', 'class'],
  Description: {
    DescriptionSummary: 'Returns the type of every item passed as input. For example, if a URL is passed, this action will return “URL”.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem']
  },
  Name: 'Get Type',
  Output: {
    Multiple: true,
    OutputName: 'Type',
    Types: ['NSString']
  },
  SuggestedNever: true
};
exports.WFAction = WFAction;