"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.file.delete';
exports.identifier = identifier;
var icon = 'Documents';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFDeleteFileAction',
  ActionKeywords: ['delete', 'files', 'remove', 'obliterate'],
  CreationDate: '2017-03-13T05:00:00.000Z',
  Description: {
    DescriptionSummary: 'Delete the files passed in as input.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['public.data']
  },
  Name: 'Delete Files',
  Parameters: [{
    Class: 'WFSwitchParameter',
    DefaultValue: true,
    Description: 'When enabled, this action will confirm with you before deleting the file.',
    Key: 'WFDeleteFileConfirmDeletion',
    Label: 'Confirm Before Deleting'
  }]
};
exports.WFAction = WFAction;