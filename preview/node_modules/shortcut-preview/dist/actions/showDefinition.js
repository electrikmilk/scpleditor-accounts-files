"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.showdefinition';
exports.identifier = identifier;
var icon = 'Dictionary';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFShowDefinitionAction',
  ActionKeywords: ['define', 'word', 'dictionary', 'lookup', 'term'],
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionSummary: 'Shows the definition of the word passed into the action.'
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['NSString']
  },
  InputPassthrough: true,
  Name: 'Show Definition',
  RequiredResources: ['WFUserInteractionResource'],
  UserInterfaces: ['UIKit', 'AppKit']
};
exports.WFAction = WFAction;