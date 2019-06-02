"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.makezip';
exports.identifier = identifier;
var icon = 'Documents';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFMakeArchiveAction',
  ActionKeywords: ['make', 'generate', 'gzip'],
  Description: {
    DescriptionResult: 'Archive',
    DescriptionSummary: 'Makes an archive out of the files passed as input. Supports creating zip, tar.gz, tar.bz2, tar, gzip, cpio, or iso archives.'
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem']
  },
  LastModifiedDate: '2016-09-23T05:00:00.000Z',
  Name: 'Make Archive',
  Output: {
    Multiple: false,
    OutputName: 'Archive',
    Types: ['WFGenericFileContentItem']
  },
  Parameters: [{
    Class: 'WFTextInputParameter',
    Key: 'WFZIPName',
    Label: 'Archive Name',
    Placeholder: 'optional',
    TextAlignment: 'Right'
  }, {
    Class: 'WFArchiveFormatParameter',
    Key: 'WFArchiveFormat',
    Label: 'Format',
    DefaultValue: '.zip'
  }]
};
exports.WFAction = WFAction;