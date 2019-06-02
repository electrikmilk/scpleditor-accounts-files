"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.detectlanguage';
exports.identifier = identifier;
var icon = 'Translate';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFDetectLanguageAction',
  ActionKeywords: ['Translate', 'Get', 'Text'],
  CreationDate: '2015-08-29T17:26:33.000Z',
  Description: {
    DescriptionNote: 'Powered by Microsoft Cognitive Services (microsoft.com/cognitive-services)',
    DescriptionSummary: 'Detects the language of the text provided as input.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSString']
  },
  Name: 'Detect Language with Microsoft',
  Output: {
    Multiple: true,
    OutputName: 'Language',
    Types: ['NSString']
  }
};
exports.WFAction = WFAction;