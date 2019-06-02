"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.pausemusic';
exports.identifier = identifier;
var icon = 'Pause';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFPauseMusicAction',
  ActionKeywords: ['pause', 'song', 'ipod', 'track', 'music', 'itunes'],
  Description: {
    DescriptionSummary: 'Pauses the currently playing music.'
  },
  InputPassthrough: true,
  Name: 'Pause Music',
  RequiredResources: ['WFMainThreadResource']
};
exports.WFAction = WFAction;