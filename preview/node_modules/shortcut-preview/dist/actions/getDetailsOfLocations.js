"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.properties.locations';
exports.identifier = identifier;
var icon = 'Location';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFContentItemPropertiesAction',
  ActionKeywords: ['geocode', 'latitude', 'longitude'],
  CreationDate: '2015-01-22T08:00:00.000Z',
  Name: 'Get Details of Locations',
  WFContentItemClass: 'WFLocationContentItem'
};
exports.WFAction = WFAction;