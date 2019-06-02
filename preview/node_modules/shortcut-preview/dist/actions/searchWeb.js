"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.searchweb';
exports.identifier = identifier;
var icon = 'Safari';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFSearchWebAction',
  ActionKeywords: ['Amazon', 'Bing', 'DuckDuckGo', 'eBay', 'Google', 'Reddit', 'Twitter', 'Yahoo!', 'YouTube', 'Internet', 'Website'],
  AppIdentifier: 'com.apple.mobilesafari',
  CreationDate: '2015-08-29T07:00:00.000Z',
  Description: {
    DescriptionSummary: 'Searches the web for the text provided as input.'
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['NSString']
  },
  InputPassthrough: true,
  Name: 'Search Web',
  Parameters: [{
    Class: 'WFEnumerationParameter',
    DefaultValue: 'Google',
    Items: ['Amazon', 'Bing', 'DuckDuckGo', 'eBay', 'Google', 'Reddit', 'Twitter', 'Yahoo!', 'YouTube'],
    Key: 'WFSearchWebDestination',
    Label: 'Search'
  }],
  RequiredResources: ['WFURLOpenResource']
};
exports.WFAction = WFAction;