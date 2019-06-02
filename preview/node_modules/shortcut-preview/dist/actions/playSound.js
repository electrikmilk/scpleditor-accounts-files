"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.playsound';
exports.identifier = identifier;
var icon = 'Sound';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFPlaySoundAction',
  ActionKeywords: ['notification', 'audio', 'music'],
  Description: {
    DescriptionSummary: 'Plays the audio file passed as input, or a default notification sound if no audio file was passed.'
  },
  Input: {
    Multiple: false,
    Required: false,
    Types: ['AVAsset']
  },
  InputPassthrough: true,
  LastModifiedDate: '2015-11-24T06:00:00.000Z',
  Name: 'Play Sound',
  UnsupportedEnvironments: ['Background']
};
exports.WFAction = WFAction;