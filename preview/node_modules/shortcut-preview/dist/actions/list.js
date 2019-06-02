"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.list';
exports.identifier = identifier;
var icon = 'Scripting';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFListAction',
  ActionKeywords: ['array'],
  Description: {
    DescriptionNote: 'If you specify a variable, the contents of that variable will be included in the list.',
    DescriptionSummary: 'Allows you to specify a list of items to be passed to the next action.'
  },
  Name: 'List',
  Output: {
    Multiple: true,
    OutputName: 'List',
    Types: ['WFContentItem']
  },
  Parameters: [{
    Class: 'WFContentArrayParameter',
    DefaultValue: ['One', 'Two'],
    Key: 'WFItems',
    Label: 'Items'
  }],
  SuggestedNever: true
};
exports.WFAction = WFAction;