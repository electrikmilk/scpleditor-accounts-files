"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.number';
exports.identifier = identifier;
var icon = 'Calculator';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFNumberAction',
  ActionKeywords: ['decimal', 'math'],
  Description: {
    DescriptionSummary: 'Passes a number to the next action.'
  },
  Name: 'Number',
  Output: {
    Multiple: false,
    OutputName: 'Number',
    Types: ['NSDecimalNumber']
  },
  Parameters: [{
    AllowsDecimalNumbers: true,
    Class: 'WFNumberFieldParameter',
    Key: 'WFNumberActionNumber',
    Label: 'Number',
    Placeholder: '42',
    TextAlignment: 'Right'
  }],
  SuggestedNever: true
};
exports.WFAction = WFAction;