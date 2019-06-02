"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.url';
exports.identifier = identifier;
var icon = 'URL';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFURLAction',
  ActionKeywords: ['text', 'such text', 'very speech', 'much words', 'so wow'],
  Description: {
    DescriptionSummary: 'Passes the specified URL to the next action.'
  },
  Name: 'URL',
  Output: {
    Multiple: false,
    OutputName: 'URL',
    Types: ['NSURL']
  },
  Parameters: [{
    AutocapitalizationType: 'None',
    Class: 'WFTextInputParameter',
    DisableAutocorrection: true,
    Key: 'WFURLActionURL',
    KeyboardType: 'URL',
    Label: 'URL',
    Placeholder: 'example.com',
    TextContentType: 'URL'
  }]
};
exports.WFAction = WFAction;