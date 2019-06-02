"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.filter.music';
exports.identifier = identifier;
var icon = 'Music';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFContentItemFilterAction',
  AppIdentifier: 'com.apple.Music',
  CreationDate: '2015-01-22T08:00:00.000Z',
  Input: {
    Types: ['WFMPMediaContentItem', 'WFAVAssetContentItem', 'WFGenericFileContentItem']
  },
  Name: 'Find Music',
  RequiredResources: ['WFAppleMusicAccessResource'],
  WFContentItemClass: 'WFMPMediaContentItem',
  WFContentItemDefaultProperty: 'Artist'
};
exports.WFAction = WFAction;