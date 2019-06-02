"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.properties.music';
exports.identifier = identifier;
var icon = 'Music';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFContentItemPropertiesAction',
  AppIdentifier: 'com.apple.Music',
  CreationDate: '2015-01-22T08:00:00.000Z',
  Input: {
    Types: ['WFMPMediaContentItem', 'WFAVAssetContentItem']
  },
  LastModifiedDate: '2016-05-23T07:00:00.000Z',
  Name: 'Get Details of Music',
  WFContentItemClass: 'WFMPMediaContentItem',
  WFContentItemDefaultProperty: 'Artist'
};
exports.WFAction = WFAction;