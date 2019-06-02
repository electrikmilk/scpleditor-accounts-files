"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.pinboard.get';
exports.identifier = identifier;
var icon = 'Pinboard';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFPinboardGetAction',
  ActionKeywords: ['URL', 'web', 'later', 'save', 'pinboard'],
  AppSection: 'Pinboard',
  CreationDate: '2015-04-23T05:00:00.000Z',
  Description: {
    DescriptionSummary: 'Gets bookmarks in your Pinboard account.'
  },
  Name: 'Get Pinboard Bookmarks',
  Output: {
    Multiple: true,
    OutputName: 'Pinboard Bookmarks',
    Types: ['WFURLContentItem']
  },
  Parameters: [{
    AutocapitalizationType: 'None',
    Class: 'WFTextInputParameter',
    Description: 'If specified, only items matching all of these tags will be returned. Supports a maximum of three tags.',
    Key: 'WFPinTags',
    Label: 'Tags',
    Placeholder: 'apple longread'
  }, {
    Class: 'WFStepperParameter',
    DefaultValue: 5,
    Key: 'WFBookmarkCount',
    StepperDescription: 'Number of Bookmarks',
    StepperNoun: 'Bookmark',
    StepperPluralNoun: 'Bookmarks',
    StepperPrefix: 'Get'
  }],
  RequiredResources: ['WFPinboardAccessResource'],
  ShortName: 'Get Bookmarks'
};
exports.WFAction = WFAction;