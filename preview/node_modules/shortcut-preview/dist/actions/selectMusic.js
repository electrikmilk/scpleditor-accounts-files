"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.exportsong';
exports.identifier = identifier;
var icon = 'Music';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFSelectMusicAction',
  ActionKeywords: ['export', 'song', 'music', 'itunes', 'library'],
  AppIdentifier: 'com.apple.Music',
  Description: {
    DescriptionSummary: 'Prompts to select music from your local music library.'
  },
  InputPassthrough: false,
  LastModifiedDate: '2015-05-12T07:00:00.000Z',
  Name: 'Select Music',
  Output: {
    Multiple: true,
    OutputName: 'Music',
    Types: ['MPMediaItem']
  },
  Parameters: [{
    Class: 'WFSwitchParameter',
    Key: 'WFExportSongActionSelectMultiple',
    Label: 'Select Multiple Songs'
  }],
  RequiredResources: ['WFAppleMusicAccessResource', 'WFUserInteractionResource'],
  UserInterfaces: ['UIKit']
};
exports.WFAction = WFAction;