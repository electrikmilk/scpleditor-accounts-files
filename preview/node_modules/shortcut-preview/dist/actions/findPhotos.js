"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.filter.photos';
exports.identifier = identifier;
var icon = 'Photos';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFContentItemFilterAction',
  AppIdentifier: 'com.apple.mobileslideshow',
  CreationDate: '2015-01-22T08:00:00.000Z',
  Input: {
    Types: ['WFPhotoMediaContentItem', 'WFImageContentItem', 'WFAVAssetContentItem', 'WFGenericFileContentItem']
  },
  LastModifiedDate: '2015-12-14T08:00:00.000Z',
  Name: 'Find Photos',
  RequiredResources: ['WFPhotoAccessResource'],
  SuggestedAsInitialAction: false,
  WFContentItemClass: 'WFPhotoMediaContentItem',
  WFContentItemDefaultProperty: 'Album'
};
exports.WFAction = WFAction;