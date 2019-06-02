"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.properties.health.quantity';
exports.identifier = identifier;
var icon = 'Health';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFContentItemPropertiesAction',
  AppIdentifier: 'com.apple.Health',
  CreationDate: '2015-06-19T07:00:00.000Z',
  Name: 'Get Details of Health Sample',
  WFContentItemClass: 'WFHKSampleContentItem'
};
exports.WFAction = WFAction;