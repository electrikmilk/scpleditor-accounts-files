"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.gethtmlfromrichtext';
exports.identifier = identifier;
var icon = 'RichText';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFHTMLFromRichTextAction',
  ActionKeywords: ['page', 'source', 'web', 'get'],
  Description: {
    DescriptionResult: 'HTML',
    DescriptionSummary: 'Converts the rich text passed as input to HTML text.'
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['WFRichTextContentItem']
  },
  Name: 'Make HTML from Rich Text',
  Output: {
    Multiple: false,
    OutputName: 'HTML from Rich Text',
    Types: ['NSString']
  },
  Parameters: [{
    Class: 'WFSwitchParameter',
    Description: 'This indicates whether or not this action writes out an entire HTML document. If this is turned off, partial HTML will be returned if possible.',
    Key: 'WFMakeFullDocument',
    Label: 'Make Full Document'
  }],
  ShortName: 'Make HTML'
};
exports.WFAction = WFAction;