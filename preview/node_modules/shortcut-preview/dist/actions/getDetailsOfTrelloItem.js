"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.properties.trello';
exports.identifier = identifier;
var icon = 'Trello';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFContentItemPropertiesAction',
  AppIdentifier: 'com.fogcreek.trello',
  CreationDate: '2016-03-15T07:00:00.000Z',
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFTrelloBoardContentItem', 'WFTrelloListContentItem', 'WFTrelloCardContentItem']
  },
  Name: 'Get Details of Trello Item',
  RequiredResources: ['WFTrelloAccessResource'],
  WFContentItemClass: 'WFTrelloItemContentItem'
};
exports.WFAction = WFAction;