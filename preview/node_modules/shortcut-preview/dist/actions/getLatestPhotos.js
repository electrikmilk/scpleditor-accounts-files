"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getlastphoto';
exports.identifier = identifier;
var icon = 'Photos';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetLatestPhotosAction',
  ActionKeywords: ['camera', 'roll', 'picture', 'last'],
  AppIdentifier: 'com.apple.mobileslideshow',
  Description: {
    DescriptionSummary: 'Gets the most recent photos from the camera roll.'
  },
  Name: 'Get Latest Photos',
  Output: {
    Multiple: true,
    OutputName: 'Latest Photos',
    Types: ['PHAsset']
  },
  Parameters: [{
    Class: 'WFStepperParameter',
    DefaultValue: 1,
    Key: 'WFGetLatestPhotoCount',
    StepperDescription: 'Number of Photos',
    StepperNoun: 'Photo',
    StepperPluralNoun: 'Photos'
  }, {
    Class: 'WFSwitchParameter',
    DefaultValue: true,
    Key: 'WFGetLatestPhotosActionIncludeScreenshots',
    Label: 'Include Screenshots'
  }],
  RequiredResources: ['WFPhotoAccessResource'],
  ShortName: 'Get Photos',
  WFGetLatestPhotosActionType: 'Photo'
};
exports.WFAction = WFAction;