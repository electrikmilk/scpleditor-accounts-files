"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getlatestlivephotos';
exports.identifier = identifier;
var icon = 'LivePhotos';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetLatestPhotosAction',
  ActionKeywords: ['camera', 'roll', 'picture', 'photo', 'animated'],
  CreationDate: '2015-12-08T08:00:00.000Z',
  Description: {
    DescriptionSummary: 'Gets the most recent Live Photos from the camera roll.'
  },
  Name: 'Get Latest Live Photos',
  Output: {
    Multiple: true,
    OutputName: 'Latest Live Photos',
    Types: ['PHAsset']
  },
  Parameters: [{
    Class: 'WFStepperParameter',
    DefaultValue: 1,
    Key: 'WFGetLatestPhotoCount',
    StepperDescription: 'Number of Live Photos',
    StepperNoun: 'Live Photo',
    StepperPluralNoun: 'Live Photos'
  }],
  RequiredResources: ['WFPhotoAccessResource'],
  ShortName: 'Get Live Photos',
  WFGetLatestPhotosActionType: 'Live Photo'
};
exports.WFAction = WFAction;