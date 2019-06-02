"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.nothing';
exports.identifier = identifier;
var icon = 'Scripting';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFNothingAction',
  ActionKeywords: ['nil', 'nothing', 'empty', 'discard', 'clear'],
  Description: {
    DescriptionSummary: 'This action does nothing and produces no output. It is useful to separate blocks of actions, or to ensure that no input is passed to the next action.'
  },
  InputPassthrough: false,
  Name: 'Nothing'
};
exports.WFAction = WFAction;