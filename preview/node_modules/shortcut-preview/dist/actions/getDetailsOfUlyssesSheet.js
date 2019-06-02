"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.properties.ulysses.sheet';
exports.identifier = identifier;
var icon = 'Ulysses';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFContentItemPropertiesAction',
  AppIdentifier: 'com.soulmen.ulysses.pad',
  CreationDate: '2017-03-17T07:00:00.000Z',
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFUlyssesSheetContentItem']
  },
  Name: 'Get Details of Ulysses Sheet',
  WFContentItemClass: 'WFUlyssesSheetContentItem'
};
exports.WFAction = WFAction;