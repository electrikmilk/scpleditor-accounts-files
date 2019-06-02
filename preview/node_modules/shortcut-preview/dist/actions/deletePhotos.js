"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.deletephotos';
exports.identifier = identifier;
var icon = 'Photos';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFDeletePhotosAction',
  ActionKeywords: ['remove', 'trash', 'picture'],
  AppIdentifier: 'com.apple.mobileslideshow',
  Description: {
    DescriptionSummary: "Deletes the photos passed as input from the device's photo library. This action asks for confirmation before performing the deletion."
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['PHAsset']
  },
  InputPassthrough: false,
  Name: 'Delete Photos',
  RequiredResources: ['WFPhotoAccessResource']
};
exports.WFAction = WFAction;