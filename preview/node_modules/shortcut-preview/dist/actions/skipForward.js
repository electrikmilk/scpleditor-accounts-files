"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.skipforward';
exports.identifier = identifier;
var icon = 'FastForward';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFSkipSongAction',
  ActionKeywords: ['ipod', 'track', 'music', 'itunes', 'next'],
  Description: {
    DescriptionSummary: 'Skips to the next song in the current music queue.'
  },
  InputPassthrough: true,
  Name: 'Skip Forward',
  RequiredResources: ['WFMainThreadResource'],
  WFSkipSongActionMode: 'Forward'
};
exports.WFAction = WFAction;