"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.pocket.add';
exports.identifier = identifier;
var icon = 'Pocket';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFPocketAddAction',
  AppIdentifier: 'com.ideashower.ReadItLaterPro',
  Description: {
    DescriptionSummary: 'Adds the input to Pocket.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFURLContentItem']
  },
  InputPassthrough: true,
  Name: 'Add to Pocket',
  Parameters: [{
    Class: 'WFTextInputParameter',
    Description: 'A comma-separated list of tags to apply to the items added to Pocket.',
    Key: 'WFPocketTags',
    Label: 'Tags',
    Placeholder: 'example, tags'
  }],
  RequiredResources: ['WFPocketAccessResource']
};
exports.WFAction = WFAction;