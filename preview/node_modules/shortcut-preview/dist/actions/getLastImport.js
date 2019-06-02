"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getlatestphotoimport';
exports.identifier = identifier;
var icon = 'Photos';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetLatestPhotoImportAction',
  ActionKeywords: ['camera', 'roll', 'picture', 'photo', 'import', 'camera', 'sd', 'card', 'usb'],
  AppIdentifier: 'com.apple.mobileslideshow',
  CreationDate: '2018-09-28T07:00:00.000Z',
  Description: {
    DescriptionSummary: 'Gets the most recent photo import from the Photos app.'
  },
  Name: 'Get Last Import',
  Output: {
    Multiple: true,
    OutputName: 'Imported Photos',
    Types: ['PHAsset']
  },
  Parameters: [],
  RequiredResources: ['WFPhotoAccessResource']
};
exports.WFAction = WFAction;