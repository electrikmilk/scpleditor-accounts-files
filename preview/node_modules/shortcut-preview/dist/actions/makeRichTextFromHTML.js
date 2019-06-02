"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getrichtextfromhtml';
exports.identifier = identifier;
var icon = 'RichText';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFRichTextFromHTMLAction',
  ActionKeywords: ['page', 'source', 'web', 'get'],
  Description: {
    DescriptionInput: 'HTML',
    DescriptionSummary: 'Takes the inputted HTML and turns it into rich text, which can then be converted to other formats.'
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['WFStringContentItem']
  },
  Name: 'Make Rich Text from HTML',
  Output: {
    Multiple: false,
    OutputName: 'Rich Text from HTML',
    Types: ['public.html']
  },
  ShortName: 'Make Rich Text',
  SuggestedNever: true
};
exports.WFAction = WFAction;