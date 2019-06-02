"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.format.number';
exports.identifier = identifier;
var icon = 'Calculator';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFFormatNumberAction',
  ActionKeywords: ['digits', 'decimal'],
  Description: {
    DescriptionSummary: 'Formats a number into text.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFBooleanContentItem', 'WFNumberContentItem']
  },
  Name: 'Format Number',
  Output: {
    Multiple: true,
    OutputName: 'Formatted Number',
    Types: ['NSString']
  },
  Parameters: [{
    Class: 'WFStepperParameter',
    DefaultValue: 2,
    Key: 'WFNumberFormatDecimalPlaces',
    MinimumValue: 0,
    StepperDescription: 'Decimal Places',
    StepperNoun: 'Decimal Place',
    StepperPluralNoun: 'Decimal Places'
  }]
};
exports.WFAction = WFAction;