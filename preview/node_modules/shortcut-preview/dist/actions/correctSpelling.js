"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.correctspelling';
exports.identifier = identifier;
var icon = 'Text';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFSpellCorrectAction',
  ActionKeywords: ['text', 'spell', 'spelling', 'correct', 'autocorrect'],
  Description: {
    DescriptionSummary: 'Autocorrects the spelling of text passed into the action.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSString']
  },
  Name: 'Correct Spelling',
  Output: {
    Multiple: true,
    OutputName: 'Corrected Spelling',
    Types: ['NSString']
  },
  SuggestedNever: true
};
exports.WFAction = WFAction;