"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.skipback';
exports.identifier = identifier;
var icon = 'Rewind';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFSkipSongAction',
  ActionKeywords: ['ipod', 'track', 'music', 'itunes', 'previous'],
  Description: {
    DescriptionSummary: 'Skips to the previous song in the current music queue.'
  },
  InputPassthrough: true,
  Name: 'Skip Back',
  Parameters: [{
    Class: 'WFEnumerationParameter',
    DefaultValue: 'Beginning',
    Items: ['Beginning', 'Previous Song'],
    Key: 'WFSkipBackBehavior',
    Label: 'Skip To'
  }],
  RequiredResources: ['WFMainThreadResource'],
  WFSkipSongActionMode: 'Back'
};
exports.WFAction = WFAction;