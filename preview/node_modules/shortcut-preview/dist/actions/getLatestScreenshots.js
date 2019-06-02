"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getlastscreenshot';
exports.identifier = identifier;
var icon = 'Photos';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetLatestPhotosAction',
  ActionKeywords: ['camera', 'roll', 'picture', 'photo', 'screen'],
  AppIdentifier: 'com.apple.mobileslideshow',
  Description: {
    DescriptionSummary: 'Gets the most recent screenshots from the camera roll.'
  },
  Name: 'Get Latest Screenshots',
  Output: {
    Multiple: true,
    OutputName: 'Latest Screenshots',
    Types: ['PHAsset']
  },
  Parameters: [{
    Class: 'WFStepperParameter',
    DefaultValue: 1,
    Key: 'WFGetLatestPhotoCount',
    StepperDescription: 'Number of Screenshots',
    StepperNoun: 'Screenshot',
    StepperPluralNoun: 'Screenshots'
  }],
  RequiredResources: ['WFPhotoAccessResource'],
  ShortName: 'Get Screenshots',
  WFGetLatestPhotosActionType: 'Screenshot'
};
exports.WFAction = WFAction;