"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.instapaper.get';
exports.identifier = identifier;
var icon = 'Instapaper';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFInstapaperGetAction',
  AppIdentifier: 'com.marcoarment.instapaperpro',
  CreationDate: '2015-04-23T05:00:00.000Z',
  Description: {
    DescriptionSummary: 'Gets the contents of a folder in Instapaper. Requires Instapaper Premium.'
  },
  Name: 'Get Instapaper Bookmarks',
  Output: {
    Multiple: true,
    OutputName: 'Instapaper Bookmarks',
    Types: ['WFURLContentItem']
  },
  Parameters: [{
    AlwaysShowsButton: true,
    Class: 'WFDynamicEnumerationParameter',
    Description: "The folder to get bookmarks from. Leaving this empty will get items from Instapaper's Home folder.",
    Key: 'WFInstapaperFolder',
    Label: 'Folder',
    NoneLabel: 'None'
  }, {
    Class: 'WFStepperParameter',
    DefaultValue: 5,
    Key: 'WFBookmarkCount',
    StepperDescription: 'Number of Bookmarks',
    StepperNoun: 'Bookmark',
    StepperPluralNoun: 'Bookmarks',
    StepperPrefix: 'Get'
  }],
  RequiredResources: ['WFInstapaperAccessResource'],
  ShortName: 'Get Bookmarks'
};
exports.WFAction = WFAction;