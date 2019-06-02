"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.gethalfwaypoint';
exports.identifier = identifier;
var icon = 'Maps';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetHalfwayPointAction',
  ActionKeywords: ['Location', 'Maps', 'Two', 'Places'],
  AppIdentifier: 'com.apple.Maps',
  CreationDate: '2015-08-29T17:26:33.000Z',
  Description: {
    DescriptionSummary: 'Gets the halfway point between two locations.'
  },
  Name: 'Get Halfway Point',
  Output: {
    OutputName: 'Halfway Point',
    Types: ['CLLocation']
  },
  Parameters: [{
    Class: 'WFLocationFieldParameter',
    Key: 'WFGetHalfwayPointFirstLocation',
    Label: 'First Location',
    Placeholder: 'San Francisco, CA',
    TextAlignment: 'Right'
  }, {
    Class: 'WFLocationFieldParameter',
    Key: 'WFGetHalfwayPointSecondLocation',
    Label: 'Second Location',
    Placeholder: 'Philadelphia, PA',
    TextAlignment: 'Right'
  }],
  SuggestedNever: true
};
exports.WFAction = WFAction;