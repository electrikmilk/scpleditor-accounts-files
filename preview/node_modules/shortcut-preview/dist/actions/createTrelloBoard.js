"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.trello.add.board';
exports.identifier = identifier;
var icon = 'Trello';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFTrelloCreateBoardAction',
  AppIdentifier: 'com.fogcreek.trello',
  CreationDate: '2016-05-12T05:00:00.000Z',
  Description: {
    DescriptionSummary: 'Creates a new board in your Trello account.'
  },
  Name: 'Create Trello Board',
  Output: {
    Multiple: false,
    OutputName: 'Trello Board',
    Types: ['WFTrelloBoard']
  },
  Parameters: [{
    Class: 'WFTextInputParameter',
    Key: 'WFTrelloName',
    Label: 'Name',
    Placeholder: 'Shortcuts',
    TextAlignment: 'Right'
  }, {
    Class: 'WFTextInputParameter',
    Key: 'WFTrelloDescription',
    Multiline: true,
    Placeholder: 'Description'
  }],
  RequiredResources: ['WFTrelloAccessResource'],
  ShortName: 'Create Board'
};
exports.WFAction = WFAction;