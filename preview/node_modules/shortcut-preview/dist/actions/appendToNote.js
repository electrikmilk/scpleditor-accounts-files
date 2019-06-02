"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.evernote.append';
exports.identifier = identifier;
var icon = 'Evernote';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFEvernoteAppendAction',
  ActionKeywords: ['add', 'prepend', 'save', 'evernote'],
  AppIdentifier: 'com.evernote.iPhone.Evernote',
  Description: {
    DescriptionInput: 'The content to add to your note',
    DescriptionSummary: 'Finds a note using the specified criteria and appends the input to the note.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem']
  },
  Name: 'Append to Note',
  Output: {
    Multiple: false,
    OutputName: 'Note',
    Types: ['ENNoteRef']
  },
  Parameters: [{
    Class: 'WFTextInputParameter',
    Description: 'The title (or part of the title) of the note to append to',
    Key: 'WFEvernoteNotesTitleSearch',
    Label: 'Note Title',
    Placeholder: 'example note',
    TextAlignment: 'Right'
  }, {
    Class: 'WFEnumerationParameter',
    DefaultValue: 'Append',
    Items: ['Append', 'Prepend'],
    Key: 'WFEvernoteWriteMode',
    Label: 'Mode'
  }, {
    Class: 'WFEvernoteNotebookPickerParameter',
    Description: 'The notebook in which the note is located (optional)',
    Key: 'WFEvernoteNotesNotebookName',
    Label: 'In Notebook'
  }],
  RequiredResources: ['WFEvernoteAccessResource']
};
exports.WFAction = WFAction;