"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.measurement.create';
exports.identifier = identifier;
var icon = 'Calculator';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFMeasurementCreateAction',
  ActionKeywords: ['degrees', 'distance', 'pressure', 'measure', 'speed', 'weather'],
  CreationDate: '2018-09-22T05:00:00.000Z',
  Description: {
    DescriptionSummary: 'Passes the specified measurement (including number and unit) to the next action.'
  },
  InputPassthrough: false,
  Name: 'Measurement',
  Output: {
    Multiple: false,
    OutputName: 'Measurement',
    Types: ['NSMeasurement']
  },
  Parameters: [{
    Class: 'WFUnitTypePickerParameter',
    DefaultValue: 'Length',
    DisallowedVariableTypes: ['Variable'],
    Key: 'WFMeasurementUnitType',
    Label: 'Type'
  }, {
    Class: 'WFUnitPickerParameter',
    Key: 'WFMeasurementUnit',
    KeyboardType: 'DecimalPad',
    Label: 'Value',
    Placeholder: '10',
    RequiredResources: [{
      WFParameterKey: 'WFMeasurementUnitType',
      WFParameterRelation: '??',
      WFResourceClass: 'WFParameterRelationResource'
    }],
    TextAlignment: 'Right'
  }]
};
exports.WFAction = WFAction;