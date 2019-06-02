"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.choosefrommenu';
exports.identifier = identifier;
var icon = 'Scripting';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFChooseFromMenuAction',
  ActionKeywords: ['list', 'prompt', 'select', 'action', 'sheet', 'switch'],
  Description: {
    DescriptionSummary: 'Presents a menu and runs different actions based on which menu item was chosen.'
  },
  InputPassthrough: true,
  Name: 'Choose from Menu',
  Parameters: [{
    Class: 'WFTextInputParameter',
    Description: 'The instruction provided when the menu is presented.',
    DisallowedVariableTypes: ['Ask'],
    Key: 'WFMenuPrompt',
    Label: 'Prompt',
    Placeholder: 'optional',
    TextAlignment: 'Right'
  }, {
    Class: 'WFArrayParameter',
    DefaultValue: ['One', 'Two'],
    Key: 'WFMenuItems',
    Label: 'Items'
  }],
  RequiredResources: ['WFUserInteractionResource'],
  ShortName: 'Menu',
  SuggestedAsInitialAction: true
};
exports.WFAction = WFAction;