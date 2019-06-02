"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.clearupnext';
exports.identifier = identifier;
var icon = 'Music';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFClearUpNextAction',
  ActionKeywords: ['song', 'music', 'itunes', 'up next', 'apple', 'album', 'next', 'play', 'clear'],
  AppIdentifier: 'com.apple.Music',
  CreationDate: '2017-02-14T08:00:00.000Z',
  Description: {
    DescriptionSummary: 'Clears all the music in your Up Next queue.'
  },
  InputPassthrough: true,
  Name: 'Clear Up Next',
  RequiredResources: ['WFAppleMusicAccessResource', {
    WFDeviceAttributes: {
      WFDeviceAttributeSystemVersion: {
        WFSystemVersion: '10.3',
        WFSystemVersionRelation: '>='
      }
    },
    WFResourceClass: 'WFDeviceAttributesResource'
  }]
};
exports.WFAction = WFAction;