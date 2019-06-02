"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.print';
exports.identifier = identifier;
var icon = 'Print';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFPrintAction',
  ActionKeywords: ['pdf', 'print', 'printer', 'airprint'],
  Description: {
    DescriptionSummary: 'Prints the input using AirPrint.'
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['UIPrintFormatter', 'com.adobe.pdf']
  },
  InputPassthrough: true,
  Name: 'Print',
  RequiredResources: ['WFUserInteractionResource'],
  UserInterfaces: ['UIKit']
};
exports.WFAction = WFAction;