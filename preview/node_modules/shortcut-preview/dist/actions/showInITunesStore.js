"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.showinstore';
exports.identifier = identifier;
var icon = 'iTunes';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFShowInStoreAction',
  ActionKeywords: ['app', 'song', 'music', 'movie', 'ebook', 'audiobook', 'tv', 'album', 'store'],
  AppIdentifier: 'com.apple.MobileStore',
  CreationDate: '2016-03-15T07:00:00.000Z',
  Description: {
    DescriptionSummary: 'Shows the iTunes products or App Store apps passed as input in a store sheet. This is useful with the Search iTunes Store and Search App Store actions.'
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['WFiTunesProductContentItem', 'WFAppStoreAppContentItem']
  },
  InputPassthrough: true,
  Name: 'Show in iTunes Store',
  Parameters: [],
  RequiredResources: ['WFUserInteractionResource'],
  UserInterfaces: ['UIKit']
};
exports.WFAction = WFAction;