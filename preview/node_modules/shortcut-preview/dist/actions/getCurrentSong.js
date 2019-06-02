"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getcurrentsong';
exports.identifier = identifier;
var icon = 'Music';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetCurrentSongAction',
  ActionKeywords: ['current', 'song', 'ipod', 'track', 'music', 'itunes', 'library', 'listening', 'playing'],
  AppIdentifier: 'com.apple.Music',
  Description: {
    DescriptionSummary: 'Returns the song that is currently playing in the Music app, if any.'
  },
  InputPassthrough: false,
  Name: 'Get Current Song',
  Output: {
    Multiple: false,
    OutputName: 'Current Song',
    Types: ['MPMediaItem']
  },
  RequiredResources: ['WFMainThreadResource', 'WFAppleMusicAccessResource']
};
exports.WFAction = WFAction;