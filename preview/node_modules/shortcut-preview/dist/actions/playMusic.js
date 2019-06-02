"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.playmusic';
exports.identifier = identifier;
var icon = 'Music';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFPlayMusicAction',
  ActionKeywords: ['play', 'song', 'ipod', 'track', 'music', 'itunes', 'library'],
  AppIdentifier: 'com.apple.Music',
  Description: {
    DescriptionInput: 'The music to be played',
    DescriptionSummary: 'Plays music using the Music app.'
  },
  Input: {
    Multiple: true,
    Types: ['MPMediaItem']
  },
  InputPassthrough: true,
  Name: 'Play Music',
  Parameters: [{
    Class: 'WFEnumerationParameter',
    Items: ['Off', 'Songs'],
    Key: 'WFPlayMusicActionShuffle',
    Label: 'Shuffle'
  }, {
    Class: 'WFEnumerationParameter',
    Items: ['None', 'One', 'All'],
    Key: 'WFPlayMusicActionRepeat',
    Label: 'Repeat'
  }],
  RequiredResources: ['WFAppleMusicAccessResource', 'WFMainThreadResource']
};
exports.WFAction = WFAction;