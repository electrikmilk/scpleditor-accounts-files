"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.number.random';
exports.identifier = identifier;
var icon = 'Calculator';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFRandomNumberAction',
  ActionKeywords: ['decimal', 'math', 'generate', 'generator'],
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionSummary: 'Passes a random number between the given minimum and maximum to the next action. The minimum and maximum numbers are included as possible results.'
  },
  Name: 'Random Number',
  Output: {
    Multiple: false,
    OutputName: 'Random Number',
    Types: ['NSDecimalNumber']
  },
  Parameters: [{
    AllowsDecimalNumbers: true,
    Class: 'WFNumberFieldParameter',
    Key: 'WFRandomNumberMinimum',
    Label: 'Minimum',
    Placeholder: '0',
    TextAlignment: 'Right'
  }, {
    AllowsDecimalNumbers: true,
    Class: 'WFNumberFieldParameter',
    Key: 'WFRandomNumberMaximum',
    Label: 'Maximum',
    Placeholder: '100',
    TextAlignment: 'Right'
  }],
  SuggestedNever: true
};
exports.WFAction = WFAction;