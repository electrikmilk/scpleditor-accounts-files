"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.image.flip';
exports.identifier = identifier;
var icon = 'Image';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFImageFlipAction',
  ActionKeywords: ['portrait', 'landscape', 'horizontal', 'vertical'],
  Description: {
    DescriptionSummary: 'Reverses the direction of images either horizontally or vertically.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['UIImage']
  },
  InputPassthrough: false,
  LastModifiedDate: '2015-08-20T07:00:00.000Z',
  Name: 'Flip Image',
  Output: {
    Multiple: true,
    OutputName: 'Flipped Image',
    Types: ['UIImage']
  },
  Parameters: [{
    Class: 'WFEnumerationParameter',
    DefaultValue: 'Horizontal',
    Items: ['Horizontal', 'Vertical'],
    Key: 'WFImageFlipDirection',
    Label: 'Direction'
  }],
  SuggestedNever: true
};
exports.WFAction = WFAction;