"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.text.combine';
exports.identifier = identifier;
var icon = 'Text';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFTextComponentsAction',
  ActionKeywords: ['separate', 'delimiter'],
  Description: {
    DescriptionSummary: 'Joins text together, inserting the separator between each join.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSString']
  },
  InputPassthrough: false,
  Name: 'Combine Text',
  Output: {
    Multiple: false,
    OutputName: 'Combined Text',
    Types: ['NSString']
  },
  Parameters: [{
    Class: 'WFEnumerationParameter',
    DefaultValue: 'Spaces',
    Items: ['New Lines', 'Spaces', 'Custom'],
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
    }]
  }],
  WFTextComponentsMode: 'Combine'
};
exports.WFAction = WFAction;