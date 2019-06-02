"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getlastvideo';
exports.identifier = identifier;
var icon = 'Photos';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetLatestPhotosAction',
  ActionKeywords: ['video', 'camera', 'roll', 'movie'],
  AppIdentifier: 'com.apple.mobileslideshow',
  Description: {
    DescriptionSummary: 'Gets the most recent videos from the camera roll.'
  },
  Name: 'Get Latest Videos',
  Output: {
    Multiple: true,
    OutputName: 'Latest Videos',
    Types: ['PHAsset']
  },
  Parameters: [{
    Class: 'WFStepperParameter',
    DefaultValue: 1,
    Key: 'WFGetLatestPhotoCount',
    StepperDescription: 'Number of Videos',
    StepperNoun: 'Video',
    StepperPluralNoun: 'Videos'
  }],
  RequiredResources: ['WFPhotoAccessResource'],
  ShortName: 'Get Videos',
  WFGetLatestPhotosActionType: 'Video'
};
exports.WFAction = WFAction;