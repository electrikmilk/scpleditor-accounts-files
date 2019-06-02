"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.properties.itunesartist';
exports.identifier = identifier;
var icon = 'iTunes';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFContentItemPropertiesAction',
  AppIdentifier: 'com.apple.MobileStore',
  CreationDate: '2016-03-15T07:00:00.000Z',
  Name: 'Get Details of iTunes Artist',
  WFContentItemClass: 'WFiTunesArtistContentItem'
};
exports.WFAction = WFAction;