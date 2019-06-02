"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.image.mask';
exports.identifier = identifier;
var icon = 'Image';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFMaskImageAction',
  ActionKeywords: ['photos', 'transform', 'overlay', 'clip', 'corner', 'radius'],
  CreationDate: '2018-02-02T08:00:00.000Z',
  Description: {
    DescriptionInput: 'Images to mask',
    DescriptionResult: 'The masked images',
    DescriptionSummary: 'Applies a mask to each image passed into the action. For example, you can cut images into a rounded rectangle, ellipse or icon shape, or provide a custom alpha mask.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFImageContentItem']
  },
  InputPassthrough: false,
  Name: 'Mask Image',
  Output: {
    Multiple: true,
    OutputName: 'Masked Image',
    Types: ['WFImageContentItem']
  },
  Parameters: [{
    Class: 'WFEnumerationParameter',
    DisallowedVariableTypes: ['Ask', 'Variable'],
    Items: ['Rounded Rectangle', 'Ellipse', 'Icon', 'Custom Image'],
    Key: 'WFMaskType',
    Label: 'Type'
  }, {
    Class: 'WFNumberFieldParameter',
    Description: 'A radius to apply to each corner of the source image in pixels.',
    Key: 'WFMaskCornerRadius',
    Label: 'Corner Radius',
    Placeholder: '0',
    RequiredResources: [{
      WFParameterKey: 'WFMaskType',
      WFParameterValue: 'Rounded Rectangle',
      WFResourceClass: 'WFParameterRelationResource'
    }],
    TextAlignment: 'Right'
  }, {
    Class: 'WFVariablePickerParameter',
    Description: 'An alpha mask to apply to the source image, where darker colors become transparent and lighter colors remain opaque. If the mask is sized differently than the source image, the mask is resized to match the dimensions of the source image.',
    Key: 'WFCustomMaskImage',
    Label: 'Image Mask',
    RequiredResources: [{
      WFParameterKey: 'WFMaskType',
      WFParameterValue: 'Custom Image',
      WFResourceClass: 'WFParameterRelationResource'
    }]
  }]
};
exports.WFAction = WFAction;