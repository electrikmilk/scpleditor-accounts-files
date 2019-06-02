"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.image.rotate';
exports.identifier = identifier;
var icon = 'Image';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFImageRotateAction',
  ActionKeywords: ['portrait', 'landscape', 'degrees', 'rotation', 'orientation'],
  Description: {
    DescriptionSummary: 'Turns an image clockwise by a particular number of degrees.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['UIImage']
  },
  InputPassthrough: false,
  LastModifiedDate: '2015-08-20T07:00:00.000Z',
  Name: 'Rotate Image',
  Output: {
    Multiple: true,
    OutputName: 'Rotated Image',
    Types: ['UIImage']
  },
  Parameters: [{
    AllowsDecimalNumbers: true,
    Class: 'WFNumberFieldParameter',
    DefaultValue: 90,
    Key: 'WFImageRotateAmount',
    Label: 'Degrees',
    Placeholder: '90',
    TextAlignment: 'Right'
  }],
  SuggestedNever: true
};
exports.WFAction = WFAction;