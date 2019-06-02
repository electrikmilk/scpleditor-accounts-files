"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.dictionary';
exports.identifier = identifier;
var icon = 'Scripting';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFDictionaryAction',
  ActionKeywords: ['json', 'plist'],
  CreationDate: '2016-11-10T20:00:00.000Z',
  Description: {
    DescriptionNote: 'When coerced to text, the dictionary is represented as JSON.',
    DescriptionSummary: 'Passes the specified list of key-value pairs to the next action as a dictionary.'
  },
  Name: 'Dictionary',
  Output: {
    Multiple: false,
    OutputName: 'Dictionary',
    Types: ['NSDictionary']
  },
  Parameters: [{
    AllowedValueTypes: [0, 1, 2, 3, 4],
    Class: 'WFDictionaryParameter',
    Key: 'WFItems',
    Label: 'Items'
  }],
  SuggestedNever: true
};
exports.WFAction = WFAction;