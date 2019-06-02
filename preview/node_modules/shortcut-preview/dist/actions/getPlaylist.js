"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.get.playlist';
exports.identifier = identifier;
var icon = 'Music';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetPlaylistAction',
  ActionKeywords: ['song', 'track'],
  AppIdentifier: 'com.apple.Music',
  CreationDate: '2015-04-06T07:00:00.000Z',
  Description: {
    DescriptionSummary: 'Gets every song in the specified playlist.'
  },
  Name: 'Get Playlist',
  Output: {
    Multiple: true,
    OutputName: 'Playlist',
    Types: ['MPMediaItem']
  },
  Parameters: [{
    Class: 'WFPlaylistPickerParameter',
    Key: 'WFPlaylistName',
    Label: 'Playlist'
  }],
  RequiredResources: ['WFAppleMusicAccessResource']
};
exports.WFAction = WFAction;