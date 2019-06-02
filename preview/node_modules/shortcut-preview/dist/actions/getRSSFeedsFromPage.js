"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.rss.extract';
exports.identifier = identifier;
var icon = 'RSS';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFRSSFeedExtractAction',
  ActionKeywords: ['extract', 'clipboard', 'copy', 'paste'],
  CreationDate: '2015-02-19T08:00:00.000Z',
  Description: {
    DescriptionSummary: 'Extracts any RSS feed URLs from the given web URLs or web page.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFURLContentItem', 'WFRichTextContentItem']
  },
  Name: 'Get RSS Feeds from Page',
  Output: {
    Multiple: true,
    OutputName: 'RSS Feeds from Page',
    Types: ['WFURLContentItem']
  },
  ShortName: 'Get RSS Feeds'
};
exports.WFAction = WFAction;