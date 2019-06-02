"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.file.getlink';
exports.identifier = identifier;
var icon = 'Documents';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetFileLinkAction',
  ActionKeywords: ['url', 'share'],
  CreationDate: '2017-03-13T05:00:00.000Z',
  Description: {
    DescriptionSummary: 'Gets a public link to the file passed into the action.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: []
  },
  Name: 'Get Link to File',
  Output: {
    Multiple: true,
    Types: ['NSURL']
  },
  OutputName: 'Link to File',
  ShortName: 'Get Link'
};
exports.WFAction = WFAction;