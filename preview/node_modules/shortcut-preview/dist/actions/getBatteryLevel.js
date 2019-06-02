"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getbatterylevel';
exports.identifier = identifier;
var icon = 'Battery';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFBatteryLevelAction',
  ActionKeywords: ['remaining', 'percentage', 'left', 'power'],
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionSummary: 'Outputs the percentage of battery remaining as a number from 0 to 100.'
  },
  Name: 'Get Battery Level',
  Output: {
    Multiple: false,
    OutputName: 'Battery Level',
    Types: ['NSDecimalNumber']
  },
  SuggestedNever: true
};
exports.WFAction = WFAction;