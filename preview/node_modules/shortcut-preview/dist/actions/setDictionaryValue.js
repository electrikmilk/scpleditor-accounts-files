"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.setvalueforkey';
exports.identifier = identifier;
var icon = 'Scripting';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFSetDictionaryValueAction',
  ActionKeywords: ['json', 'plist', 'xml', 'urlencoded', 'query', 'string', 'for', 'key', 'update', 'merge'],
  CreationDate: '2016-10-04T05:00:00.000Z',
  Description: {
    DescriptionSummary: 'Sets a value in the dictionary passed into the action. '
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['WFDictionaryContentItem']
  },
  InputPassthrough: false,
  Name: 'Set Dictionary Value',
  Output: {
    Multiple: false,
    OutputName: 'Dictionary',
    Types: ['WFDictionaryContentItem']
  },
  Parameters: [{
    AutocapitalizationType: 'None',
    Class: 'WFTextInputParameter',
    DisableAutocorrection: true,
    Key: 'WFDictionaryKey',
    Label: 'Key',
    Placeholder: 'name',
    TextAlignment: 'Right'
  }, {
    AutocapitalizationType: 'None',
    Class: 'WFTextInputParameter',
    DisableAutocorrection: true,
    Key: 'WFDictionaryValue',
    Label: 'Value',
    Placeholder: 'example',
    TextAlignment: 'Right'
  }]
};
exports.WFAction = WFAction;