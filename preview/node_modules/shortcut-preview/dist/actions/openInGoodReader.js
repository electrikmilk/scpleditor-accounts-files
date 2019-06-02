"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.goodreader.open';
exports.identifier = identifier;
var icon = 'GoodReader';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFSendToGoodReaderAction',
  ActionKeywords: ['save', 'file', 'document'],
  AppIdentifier: 'com.goodiware.goodreader4',
  CreationDate: '2015-02-03T08:00:00.000Z',
  Description: {
    DescriptionSummary: 'Opens a file in GoodReader.'
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['public.data']
  },
  InputPassthrough: true,
  Name: 'Open in GoodReader',
  RequiredResources: ['WFURLOpenResource', {
    AppIdentifier: 'com.goodiware.goodreader4',
    WFResourceClass: 'WFAppInstalledResource'
  }]
};
exports.WFAction = WFAction;