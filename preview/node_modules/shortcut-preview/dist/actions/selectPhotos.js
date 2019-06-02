"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.selectphoto';
exports.identifier = identifier;
var icon = 'Photos';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFSelectPhotoAction',
  ActionKeywords: ['select', 'photo', 'from', 'library', 'picture'],
  AppIdentifier: 'com.apple.mobileslideshow',
  Description: {
    DescriptionResult: 'The selected photos/videos',
    DescriptionSummary: 'Prompts to choose photos and videos from your photo library.'
  },
  Name: 'Select Photos',
  Output: {
    Multiple: true,
    OutputName: 'Photos',
    Types: ['PHAsset']
  },
  Parameters: [{
    Class: 'WFSwitchParameter',
    Key: 'WFSelectMultiplePhotos',
    Label: 'Select Multiple'
  }],
  RequiredResources: ['WFPhotoAccessResource', 'WFUserInteractionResource'],
  UserInterfaces: ['WatchKit', 'UIKit']
};
exports.WFAction = WFAction;