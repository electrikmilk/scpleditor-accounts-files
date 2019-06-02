"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.showinblindsquare';
exports.identifier = identifier;
var icon = 'BlindSquare';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFShowInBlindSquareAction',
  AppIdentifier: 'com.mipsoft.blindsquare',
  CreationDate: '2015-08-20T07:00:00.000Z',
  Description: {
    DescriptionSummary: 'Opens BlindSquare showing information about the place passed as input, so you can save it as a favorite, start tracking it, or start simulation mode.'
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['CLLocation', 'MKMapItem']
  },
  InputPassthrough: true,
  Name: 'Show in BlindSquare',
  Parameters: [{
    Class: 'WFSwitchParameter',
    DefaultValue: false,
    Key: 'WFBlindSquareSimulation',
    Label: 'Start Simulation'
  }],
  RequiredResources: ['WFURLOpenResource', {
    AppIdentifier: 'com.mipsoft.blindsquare',
    WFResourceClass: 'WFAppInstalledResource'
  }],
  ShortName: 'Show BlindSquare'
};
exports.WFAction = WFAction;