"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.filter.files';
exports.identifier = identifier;
var icon = 'Documents';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFContentItemFilterAction',
  CreationDate: '2015-01-22T08:00:00.000Z',
  Input: {
    Types: ['public.data']
  },
  Name: 'Filter Files',
  SuggestedNever: true,
  WFContentItemClass: 'WFGenericFileContentItem'
};
exports.WFAction = WFAction;