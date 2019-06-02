"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.viewresult';
exports.identifier = identifier;
var icon = 'Graph';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFViewContentGraphAction',
  Description: {
    DescriptionSummary: 'Shows the results of the previous action in the Content Graph.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem']
  },
  InputPassthrough: true,
  Name: 'View Content Graph',
  RequiredResources: ['WFUserInteractionResource'],
  ShortName: 'Content Graph',
  UserInterfaces: ['UIKit']
};
exports.WFAction = WFAction;