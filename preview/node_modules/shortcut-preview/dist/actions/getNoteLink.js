"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.evernote.getlink';
exports.identifier = identifier;
var icon = 'Evernote';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFEvernoteGetLinkAction',
  ActionKeywords: ['url', 'share'],
  AppIdentifier: 'com.evernote.iPhone.Evernote',
  Description: {
    DescriptionSummary: 'Gets a link to the Evernote note passed into the action, which can be shared.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['ENNoteRef']
  },
  Name: 'Get Note Link',
  Output: {
    Multiple: true,
    OutputName: 'Note Link',
    Types: ['NSURL']
  },
  Parameters: [{
    Class: 'WFSwitchParameter',
    DefaultValue: false,
    Description: 'When enabled, an evernote:// URL will be generated, suitable for opening the note in the Evernote app.',
    Key: 'WFEvernoteShareInAppLink',
    Label: 'In-App Link'
  }],
  RequiredResources: ['WFEvernoteAccessResource']
};
exports.WFAction = WFAction;