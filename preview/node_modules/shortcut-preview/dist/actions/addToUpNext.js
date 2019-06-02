"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.addmusictoupnext';
exports.identifier = identifier;
var icon = 'Music';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFAddMusicToUpNextAction',
  ActionKeywords: ['song', 'music', 'itunes', 'up next', 'apple', 'album', 'next', 'play'],
  AppIdentifier: 'com.apple.Music',
  CreationDate: '2017-02-14T08:00:00.000Z',
  Description: {
    DescriptionInput: 'Items in your music library or items from the Search iTunes action.',
    DescriptionSummary: 'Adds the music passed as input to your Up Next queue.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFiTunesProductContentItem', 'WFMPMediaContentItem']
  },
  InputPassthrough: true,
  Name: 'Add to Up Next',
  Parameters: [{
    Class: 'WFEnumerationParameter',
    DefaultValue: 'Next',
    DisallowedVariableTypes: ['Variable'],
    Items: ['Next', 'Later'],
    Key: 'WFWhenToPlay',
    Label: 'Play'
  }],
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