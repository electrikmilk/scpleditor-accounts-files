"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getlatestbursts';
exports.identifier = identifier;
var icon = 'Bursts';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetLatestPhotosAction',
  ActionKeywords: ['camera', 'roll', 'picture', 'photo', 'animated'],
  CreationDate: '2015-12-08T08:00:00.000Z',
  Description: {
    DescriptionSummary: 'Gets the most recent burst photos from the camera roll.'
  },
  Name: 'Get Latest Bursts',
  Output: {
    Multiple: true,
    OutputName: 'Latest Bursts',
    Types: ['PHAsset']
  },
  Parameters: [{
    Class: 'WFStepperParameter',
    DefaultValue: 1,
    Key: 'WFGetLatestPhotoCount',
    StepperDescription: 'Number of Bursts',
    StepperNoun: 'Burst',
    StepperPluralNoun: 'Bursts'
  }],
  RequiredResources: ['WFPhotoAccessResource'],
  ShortName: 'Get Bursts',
  WFGetLatestPhotosActionType: 'Burst'
};
exports.WFAction = WFAction;