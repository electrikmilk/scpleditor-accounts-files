"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.statistics';
exports.identifier = identifier;
var icon = 'Calculator';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFCalculateStatisticsAction',
  ActionKeywords: ['number', 'average', 'mean', 'mode', 'median', 'maximum', 'deviation', 'sum', 'minimum'],
  CreationDate: '2015-06-16T07:00:00.000Z',
  Description: {
    DescriptionSummary: 'Calculates statistics on the numbers that are provided as input.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSNumber']
  },
  Name: 'Calculate Statistics',
  Output: {
    Multiple: true,
    OutputName: 'Statistics',
    Types: ['NSNumber']
  },
  Parameters: [{
    Class: 'WFEnumerationParameter',
    DefaultValue: 'Average',
    Items: ['Average', 'Minimum', 'Maximum', 'Sum', 'Median', 'Mode', 'Range', 'Standard Deviation'],
    Key: 'WFStatisticsOperation',
    Label: 'Operation'
  }]
};
exports.WFAction = WFAction;