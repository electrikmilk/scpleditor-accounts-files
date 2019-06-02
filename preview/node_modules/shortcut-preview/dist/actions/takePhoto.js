"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.takephoto';
exports.identifier = identifier;
var icon = 'Camera';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFTakePhotoAction',
  ActionKeywords: ['camera', 'take', 'photo'],
  AppIdentifier: 'com.apple.camera',
  Description: {
    DescriptionResult: 'Photo from the camera.',
    DescriptionSummary: 'Uses the camera to take photos.'
  },
  InputPassthrough: false,
  LastModifiedDate: '2015-08-20T07:00:00.000Z',
  Name: 'Take Photo',
  Output: {
    Multiple: true,
    OutputName: 'Photo',
    Required: true,
    Types: ['UIImage']
  },
  Parameters: [{
    Class: 'WFSwitchParameter',
    DefaultValue: true,
    Key: 'WFCameraCaptureShowPreview',
    Label: 'Show Camera Preview'
  }, {
    Class: 'WFStepperParameter',
    DefaultValue: 1,
    Key: 'WFPhotoCount',
    RequiredResources: [{
      WFParameterKey: 'WFCameraCaptureShowPreview',
      WFParameterValue: true,
      WFResourceClass: 'WFParameterRelationResource'
    }],
    StepperDescription: 'Number of Photos',
    StepperNoun: 'Photo',
    StepperPluralNoun: 'Photos',
    StepperPrefix: 'Take'
  }, {
    Class: 'WFEnumerationParameter',
    DefaultValue: 'Back',
    Items: ['Front', 'Back'],
    Key: 'WFCameraCaptureDevice',
    Label: 'Camera'
  }],
  RequiredResources: ['WFUserInteractionResource', 'WFCameraAccessResource'],
  UnsupportedEnvironments: ['Extension'],
  UserInterfaces: ['UIKit']
};
exports.WFAction = WFAction;