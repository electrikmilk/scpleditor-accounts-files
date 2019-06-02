"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.setvolume';
exports.identifier = identifier;
var icon = 'Sound';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFSetVolumeAction',
  ActionKeywords: ['sound', 'speaker', 'loud'],
  Description: {
    DescriptionSummary: 'Sets the system volume.'
  },
  InputPassthrough: true,
  Name: 'Set Volume',
  Parameters: [{
    Class: 'WFSliderParameter',
    DefaultValue: 0.5,
    Description: 'If you set the volume using a variable, use a number between 0 and 1 (for example, pass 0.5 for half volume).',
    Key: 'WFVolume',
    Label: 'Volume'
  }]
};
exports.WFAction = WFAction;