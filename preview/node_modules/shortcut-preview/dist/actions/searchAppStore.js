"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.searchappstore';
exports.identifier = identifier;
var icon = 'AppStore';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFSearchiTunesAction',
  ActionKeywords: ['app', 'song', 'music', 'movie', 'ebook', 'audiobook', 'tv', 'album', 'store'],
  AppIdentifier: 'com.apple.AppStore',
  CreationDate: '2016-03-15T07:00:00.000Z',
  Description: {
    DescriptionSummary: 'Searches the App Store, returning the apps that match the specified search terms. You can get more details about the results using the Get Details of App Store App action.'
  },
  InputPassthrough: false,
  Name: 'Search App Store',
  Output: {
    Multiple: true,
    OutputName: 'App Store Apps',
    Types: ['WFAppStoreAppContentItem']
  },
  Parameters: [{
    Class: 'WFTextInputParameter',
    Key: 'WFSearchTerm',
    Label: 'Search',
    Placeholder: 'Shortcuts',
    TextAlignment: 'Right'
  }, {
    Class: 'WFDynamicEnumerationParameter',
    Key: 'WFAttribute',
    Label: 'Search By'
  }, {
    Class: 'WFDynamicEnumerationParameter',
    Key: 'WFEntity',
    Label: 'Results'
  }, {
    Class: 'WFiTunesStoreCountryPickerParameter',
    Key: 'WFCountry',
    Label: 'Country'
  }, {
    Class: 'WFStepperParameter',
    DefaultValue: 25,
    Key: 'WFItemLimit',
    MaximumValue: 100,
    MinimumValue: 1,
    Pefix: 'Get',
    StepperDescription: 'Number of Items',
    StepperNoun: 'Item',
    StepperPluralNoun: 'Items'
  }],
  SuggestedNever: true
};
exports.WFAction = WFAction;