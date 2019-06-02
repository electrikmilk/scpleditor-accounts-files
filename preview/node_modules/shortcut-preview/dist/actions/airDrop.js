"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.airdropdocument';
exports.identifier = identifier;
var icon = 'AirDrop';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFAirDropAction',
  ActionKeywords: ['airdrop', 'file', 'document', 'send', 'share'],
  Description: {
    DescriptionSummary: 'Prompts to share the input via AirDrop.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem']
  },
  InputPassthrough: true,
  Name: 'AirDrop',
  RequiredResources: ['WFUserInteractionResource'],
  UserInterfaces: ['UIKit']
};
exports.WFAction = WFAction;