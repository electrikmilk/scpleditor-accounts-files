"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.trello.get';
exports.identifier = identifier;
var icon = 'Trello';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFTrelloGetItemsAction',
  AppIdentifier: 'com.fogcreek.trello',
  CreationDate: '2016-05-12T05:00:00.000Z',
  Description: {
    DescriptionSummary: 'Gets cards, lists, or boards in your Trello account.'
  },
  Name: 'Get Trello Items',
  Output: {
    Multiple: true,
    OutputName: 'Trello Items',
    Types: ['WFTrelloBoard', 'WFTrelloList', 'WFTrelloCard']
  },
  Parameters: [{
    Class: 'WFEnumerationParameter',
    DefaultValue: 'Boards',
    Items: ['Boards', 'Lists', 'Cards'],
    Key: 'WFTrelloItemType',
    Label: 'Get'
  }, {
    Class: 'WFTrelloBoardPickerParameter',
    Key: 'WFTrelloBoard',
    Label: 'Board',
    RequiredResources: [{
      WFParameterKey: 'WFTrelloItemType',
      WFParameterValues: ['Lists', 'Cards'],
      WFResourceClass: 'WFParameterRelationResource'
    }]
  }, {
    BoardKey: 'WFTrelloBoard',
    Class: 'WFTrelloListPickerParameter',
    Key: 'WFTrelloList',
    Label: 'List',
    RequiredResources: [{
      WFParameterKey: 'WFTrelloItemType',
      WFParameterValue: 'Cards',
      WFResourceClass: 'WFParameterRelationResource'
    }]
  }],
  RequiredResources: ['WFTrelloAccessResource'],
  ShortName: 'Get Items'
};
exports.WFAction = WFAction;