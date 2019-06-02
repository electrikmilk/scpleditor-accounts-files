"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.delay';
exports.identifier = identifier;
var icon = 'Scripting';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFDelayAction',
  ActionKeywords: ['time', 'delay', 'script', 'wait', 'second'],
  Description: {
    DescriptionSummary: 'Waits for the specified number of seconds before continuing with the next action.'
  },
  InputPassthrough: true,
  Name: 'Wait',
  Parameters: [{
    Class: 'WFStepperParameter',
    DefaultValue: 1,
    Key: 'WFDelayTime',
    Placeholder: 0,
    StepperDescription: 'Number of Seconds',
    StepperNoun: 'Second',
    StepperPluralNoun: 'Seconds'
  }],
  RequiredResources: ['WFMainThreadResource']
};
exports.WFAction = WFAction;