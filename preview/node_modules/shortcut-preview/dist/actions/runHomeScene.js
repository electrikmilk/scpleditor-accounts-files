"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.runscene';
exports.identifier = identifier;
var icon = 'Home';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFRunSceneAction',
  ActionKeywords: ['homekit', 'home', 'scene'],
  AppIdentifier: 'com.apple.Home',
  Description: {
    DescriptionSummary: 'Sets a Home scene.'
  },
  InputPassthrough: true,
  Name: 'Run Home Scene',
  Parameters: [{
    AlwaysShowsButton: true,
    Class: 'WFHomePickerParameter',
    Description: 'The home in which the scene is configured',
    DisallowedVariableTypes: ['Variable'],
    Key: 'WFHomeName',
    Label: 'Home'
  }, {
    AlwaysShowsButton: true,
    Class: 'WFHomeScenePickerParameter',
    Key: 'WFHomeSceneName',
    Label: 'Scene'
  }],
  RequiredResources: ['WFHomeKitAccessResource']
};
exports.WFAction = WFAction;