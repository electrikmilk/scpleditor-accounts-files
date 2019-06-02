"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.detect.images';
exports.identifier = identifier;
var icon = 'Image';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFCoercionAction',
  ActionKeywords: ['find', 'search', 'detect', 'scan', 'e-mail', 'emails'],
  CoercionItemClass: 'WFImageContentItem',
  Description: {
    DescriptionSummary: 'Gets images from the result of the previous action.\n\nFor example, this action can get the album art of a song, or all the images on a web page.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['UIImage']
  },
  Name: 'Get Images from Input',
  Output: {
    Multiple: true,
    OutputName: 'Images',
    Types: ['WFImageContentItem']
  },
  ShortName: 'Get Images'
};
exports.WFAction = WFAction;