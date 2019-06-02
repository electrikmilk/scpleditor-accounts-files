"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.adjustdate';
exports.identifier = identifier;
var icon = 'Date';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFAdjustDateAction',
  ActionKeywords: ['add', 'subtract', 'math', 'time', 'get', 'start', 'of', 'minute', 'hour', 'day', 'month', 'year'],
  CreationDate: '2015-02-03T08:00:00.000Z',
  Description: {
    DescriptionNote: 'This action supports decimal numbers when adding or subtracting seconds, minutes, hours, or days. Otherwise only integers are supported.',
    DescriptionSummary: 'Adds or subtracts an amount of time from the date passed into the action.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFDateContentItem', 'WFCalendarEventContentItem', 'WFTimeIntervalContentItem']
  },
  InputPassthrough: false,
  LastModifiedDate: '2017-02-27T08:00:00.000Z',
  Name: 'Adjust Date',
  Output: {
    Multiple: true,
    OutputName: 'Adjusted Date',
    Types: ['NSDate']
  },
  Parameters: [{
    Class: 'WFTimeOffsetParameter',
    Key: 'WFAdjustOffsetPicker'
  }],
  RequiredResources: [{
    RequiredResources: [{
      WFParameterKey: 'WFAdjustAsksWhenRun',
      WFParameterValue: true,
      WFResourceClass: 'WFParameterRelationResource'
    }],
    WFResourceClass: 'WFUserInteractionResource'
  }]
};
exports.WFAction = WFAction;