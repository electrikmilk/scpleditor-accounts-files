"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.readinglist';
exports.identifier = identifier;
var icon = 'Safari';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFAddToReadingListAction',
  ActionKeywords: ['URL', 'web', 'later', 'save', 'reading', 'list'],
  AppIdentifier: 'com.apple.mobilesafari',
  Description: {
    DescriptionSummary: 'Adds URLs passed into the action to your reading list.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFURLContentItem']
  },
  InputPassthrough: true,
  Name: 'Add to Reading List',
  ShortName: 'Read Later'
};
exports.WFAction = WFAction;