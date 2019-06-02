"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.unzip';
exports.identifier = identifier;
var icon = 'Documents';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFExtractArchiveAction',
  ActionKeywords: ['extract', 'unarchive', 'unzip', 'contents', 'gzip'],
  CreationDate: '2016-09-23T05:00:00.000Z',
  Description: {
    DescriptionInput: 'Archive',
    DescriptionSummary: 'Extracts files from the archive passed as input. Many archive formats are supported, including zip, rar, tar.gz, tar.bz2, tar, gzip, cpio, cab, and iso archives.'
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['public.data']
  },
  Name: 'Extract Archive',
  Output: {
    Multiple: true,
    OutputName: 'Files',
    Types: ['WFGenericFileContentItem']
  },
  Parameters: []
};
exports.WFAction = WFAction;