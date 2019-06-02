"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.trello.add.list';
exports.identifier = identifier;
var icon = 'Trello';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFTrelloCreateListAction',
  AppIdentifier: 'com.fogcreek.trello',
  CreationDate: '2016-05-12T05:00:00.000Z',
  Description: {
    DescriptionSummary: 'Creates a new list on the specified board in your Trello account.'
  },
  Name: 'Create Trello List',
  Output: {
    Multiple: false,
    OutputName: 'Trello List',
    Types: ['WFTrelloList']
  },
  Parameters: [{
    Class: 'WFTextInputParameter',
    Key: 'WFTrelloName',
    Label: 'Name',
    Placeholder: 'Shortcut Ideas',
    TextAlignment: 'Right'
  }, {
    Class: 'WFTrelloBoardPickerParameter',
    Key: 'WFTrelloBoard',
    Label: 'Board'
  }, {
    Class: 'WFEnumerationParameter',
    DefaultValue: 'Top',
    Items: ['Top', 'Bottom'],
    Key: 'WFTrelloPosition',
    Label: 'Position'
  }],
  RequiredResources: ['WFTrelloAccessResource'],
  ShortName: 'Create List'
};
exports.WFAction = WFAction;