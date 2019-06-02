"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.openin';
exports.identifier = identifier;
var icon = 'Apps';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFOpenInAction',
  ActionKeywords: ['open', 'file', 'document', 'in', 'app', 'application', 'uidocumentinteractioncontroller'],
  Description: {
    DescriptionSummary: 'Opens the input as a file in the specified app.'
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['public.data']
  },
  InputPassthrough: true,
  Name: 'Open In...',
  Parameters: [{
    Class: 'WFSwitchParameter',
    DefaultValue: true,
    Key: 'WFOpenInAskWhenRun',
    Label: 'Show Open In Menu'
  }, {
    AppSearchType: 'OpenIn',
    Class: 'WFAppPickerParameter',
    Key: 'WFOpenInAppIdentifier',
    Label: 'App',
    RequiredResources: [{
      WFParameterKey: 'WFOpenInAskWhenRun',
      WFParameterValue: false,
      WFResourceClass: 'WFParameterRelationResource'
    }]
  }, {
    Class: 'WFTextInputParameter',
    Hidden: true,
    Key: 'WFAppName'
  }],
  RequiredResources: ['WFUserInteractionResource'],
  UserInterfaces: ['UIKit', 'UIKitWidget']
};
exports.WFAction = WFAction;