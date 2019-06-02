"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.text.split';
exports.identifier = identifier;
var icon = 'Text';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFTextComponentsAction',
  ActionKeywords: ['separate', 'delimiter'],
  Description: {
    DescriptionSummary: 'Separates text passed into the action into a list.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSString']
  },
  InputPassthrough: false,
  LastModifiedDate: '2016-10-10T19:00:00.000Z',
  Name: 'Split Text',
  Output: {
    Multiple: true,
    OutputName: 'Split Text',
    Types: ['NSString']
  },
  Parameters: [{
    Class: 'WFEnumerationParameter',
    DefaultValue: 'New Lines',
    Items: ['New Lines', 'Spaces', 'Every Character', 'Custom'],
    Key: 'WFTextSeparator',
    Label: 'Separator'
  }, {
    Class: 'WFTextInputParameter',
    Key: 'WFTextCustomSeparator',
    Label: 'Custom',
    Placeholder: 'Text',
    RequiredResources: [{
      WFParameterKey: 'WFTextSeparator',
      WFParameterValue: 'Custom',
      WFResourceClass: 'WFParameterRelationResource'
    }],
    TextAlignment: 'Right'
  }],
  WFTextComponentsMode: 'Split'
};
exports.WFAction = WFAction;