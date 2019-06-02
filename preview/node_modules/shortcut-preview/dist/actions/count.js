"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.count';
exports.identifier = identifier;
var icon = 'Calculator';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFCountAction',
  ActionKeywords: ['get', 'number', 'length', 'list'],
  Description: {
    DescriptionNote: "This is just like the Count in Sesame Street, but instead of a vampire, it's a Shortcuts action.",
    DescriptionSummary: 'Counts the number of items, characters, words, sentences, or lines passed as input.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem', 'WFStringContentItem']
  },
  Name: 'Count',
  Output: {
    Multiple: false,
    OutputName: 'Count',
    Types: ['NSDecimalNumber']
  },
  Parameters: [{
    Class: 'WFEnumerationParameter',
    Items: ['Items', 'Characters', 'Words', 'Sentences', 'Lines'],
    Key: 'WFCountType',
    Label: 'Count'
  }]
};
exports.WFAction = WFAction;