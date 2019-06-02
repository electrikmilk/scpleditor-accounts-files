"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.properties.files';
exports.identifier = identifier;
var icon = 'Documents';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFContentItemPropertiesAction',
  CreationDate: '2015-01-22T08:00:00.000Z',
  Input: {
    Types: ['public.data']
  },
  Name: 'Get Details of Files',
  SuggestedNever: true,
  WFContentItemClass: 'WFGenericFileContentItem'
};
exports.WFAction = WFAction;