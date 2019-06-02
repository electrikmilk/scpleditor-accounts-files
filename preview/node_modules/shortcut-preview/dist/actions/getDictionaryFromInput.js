"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.detect.dictionary';
exports.identifier = identifier;
var icon = 'Scripting';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFCoercionAction',
  ActionKeywords: ['json', 'xml', 'plist', 'www', 'urlencoded', 'form', 'query', 'string'],
  CoercionItemClass: 'WFDictionaryContentItem',
  Description: {
    DescriptionSummary: 'Makes a dictionary from the text passed as input. JSON (like {"foo": "bar"}), key-value pairs (like foo=bar&baz=biz), and XML-based plist are supported.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSDictionary']
  },
  LastModifiedDate: '2015-11-24T06:00:00.000Z',
  Name: 'Get Dictionary from Input',
  Output: {
    Multiple: true,
    OutputName: 'Dictionary',
    Types: ['WFDictionaryContentItem']
  },
  ShortName: 'Get Dictionary'
};
exports.WFAction = WFAction;