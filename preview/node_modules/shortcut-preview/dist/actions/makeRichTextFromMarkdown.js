"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getrichtextfrommarkdown';
exports.identifier = identifier;
var icon = 'RichText';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFRichTextFromMarkdownAction',
  ActionKeywords: ['html', 'get'],
  Description: {
    DescriptionInput: 'Markdown',
    DescriptionSummary: 'Takes the inputted Markdown and turns it into rich text, which can then be converted to other formats.'
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['WFStringContentItem']
  },
  Name: 'Make Rich Text from Markdown',
  Output: {
    Multiple: false,
    OutputName: 'Rich Text from Markdown',
    Types: ['public.html']
  },
  ShortName: 'Make Rich Text',
  SuggestedNever: true
};
exports.WFAction = WFAction;