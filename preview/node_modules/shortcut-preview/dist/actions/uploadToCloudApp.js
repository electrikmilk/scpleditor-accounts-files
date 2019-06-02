"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.cloudapp.upload';
exports.identifier = identifier;
var icon = 'CloudApp';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFCloudAppUploadAction',
  AppSection: 'CloudApp',
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionResult: 'CloudApp URL',
    DescriptionSummary: 'Uploads the input to CloudApp and returns the CloudApp URL.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFGenericFileContentItem', 'WFURLContentItem']
  },
  LastModifiedDate: '2015-11-24T06:00:00.000Z',
  Name: 'Upload to CloudApp',
  Output: {
    Multiple: true,
    OutputName: 'CloudApp URLs',
    Types: ['NSURL']
  },
  Parameters: [{
    Class: 'WFEnumerationParameter',
    DefaultValue: 'Private',
    Items: ['Private', 'Public'],
    Key: 'WFCloudAppPrivacyType',
    Label: 'Link Privacy'
  }],
  RequiredResources: ['WFCloudAppAccessResource'],
  ShortName: 'Upload'
};
exports.WFAction = WFAction;