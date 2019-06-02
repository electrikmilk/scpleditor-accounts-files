"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.showwebpage';
exports.identifier = identifier;
var icon = 'Safari';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFShowWebPageAction',
  ActionKeywords: ['safari', 'view', 'controller', 'open', 'website', 'preview', 'quick', 'look'],
  AppIdentifier: 'com.apple.mobilesafari',
  CreationDate: '2016-05-17T22:30:00.000Z',
  Description: {
    DescriptionSummary: 'Shows the web URL passed into the action in a Safari View Controller, allowing you to view the web page without switching apps.'
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['WFURLContentItem', 'WFRichTextContentItem']
  },
  InputPassthrough: true,
  Name: 'Show Web Page',
  Parameters: [{
    Class: 'WFSwitchParameter',
    DefaultValue: false,
    Description: 'Enter Safari Reader mode if it’s available for the given web page.',
    Key: 'WFEnterSafariReader',
    Label: 'Enter Safari Reader'
  }],
  RequiredResources: ['WFUserInteractionResource'],
  UserInterfaces: ['UIKit']
};
exports.WFAction = WFAction;