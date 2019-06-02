"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.repeat.count';
exports.identifier = identifier;
var icon = 'Scripting';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFFiniteRepeatAction',
  ActionKeywords: ['loop', 'while', 'for'],
  Description: {
    DescriptionSummary: 'Repeats the contained actions, running them the specified number of times.'
  },
  Input: {
    Multiple: true,
    Required: false,
    Types: ['WFContentItem']
  },
  LastModifiedDate: '2015-05-12T07:00:00.000Z',
  Name: 'Repeat',
  Output: {
    Multiple: true,
    OutputName: 'Repeat',
    Types: ['WFContentItem']
  },
  Parameters: [{
    Class: 'WFStepperParameter',
    Key: 'WFRepeatCount',
    StepperDescription: 'Repetitions',
    StepperNoun: 'Time',
    StepperPluralNoun: 'Times',
    StepperPrefix: 'Repeat'
  }]
};
exports.WFAction = WFAction;