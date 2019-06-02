"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.filter.images';
exports.identifier = identifier;
var icon = 'Image';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFContentItemFilterAction',
  CreationDate: '2015-01-22T08:00:00.000Z',
  Input: {
    Types: ['WFPhotoMediaContentItem', 'WFImageContentItem', 'WFAVAssetContentItem']
  },
  Name: 'Filter Images',
  WFContentItemClass: 'WFImageContentItem'
};
exports.WFAction = WFAction;