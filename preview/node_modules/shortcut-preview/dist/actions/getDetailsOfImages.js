"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.properties.images';
exports.identifier = identifier;
var icon = 'Image';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFContentItemPropertiesAction',
  ActionKeywords: ['photo', 'video', 'media'],
  CreationDate: '2015-01-22T08:00:00.000Z',
  Input: {
    Types: ['WFPhotoMediaContentItem', 'WFImageContentItem', 'WFAVAssetContentItem']
  },
  LastModifiedDate: '2015-12-14T08:00:00.000Z',
  Name: 'Get Details of Images',
  WFContentItemClass: 'WFImageContentItem'
};
exports.WFAction = WFAction;