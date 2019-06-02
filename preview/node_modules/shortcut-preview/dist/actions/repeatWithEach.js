"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.repeat.each';
exports.identifier = identifier;
var icon = 'Scripting';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFForEachRepeatAction',
  ActionKeywords: ['loop', 'while', 'for'],
  Description: {
    DescriptionInput: 'A list of items',
    DescriptionResult: 'Every item passed to the “End Repeat” action',
    DescriptionSummary: 'Takes a list of items as input, and runs the contained actions once for each item in the list.'
  },
  Input: {
    Multiple: true,
    Required: false,
    Types: ['WFContentItem']
  },
  LastModifiedDate: '2015-05-12T07:00:00.000Z',
  Name: 'Repeat with Each',
  Output: {
    Multiple: true,
    OutputName: 'Repeat with Each',
    Types: ['WFContentItem']
  }
};
exports.WFAction = WFAction;