"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.properties.weather.conditions';
exports.identifier = identifier;
var icon = 'Weather';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFContentItemPropertiesAction',
  AppIdentifier: 'com.apple.weather',
  CreationDate: '2018-09-20T07:00:00.000Z',
  Name: 'Get Details of Weather Conditions',
  WFContentItemClass: 'WFWeatherDataContentItem'
};
exports.WFAction = WFAction;