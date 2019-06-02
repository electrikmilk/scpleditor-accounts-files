"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.getwifi';
exports.identifier = identifier;
var icon = 'Wi-Fi';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetNetworkDetailsAction',
  ActionKeywords: ['wifi', 'wi-fi', 'mac', 'address', 'name', 'technology', 'code', 'radio', 'country', 'carrier', 'cellular', 'wlan'],
  CreationDate: '2015-08-20T07:00:00.000Z',
  Description: {
    DescriptionSummary: 'Gets information about the currently connected networks.'
  },
  Name: 'Get Network Details',
  Output: {
    Multiple: false,
    OutputName: 'Network Details',
    Types: ['NSString']
  },
  Parameters: [{
    Class: 'WFNetworkPickerParameter',
    Key: 'WFNetworkDetailsNetwork',
    Label: 'Network'
  }, {
    Class: 'WFEnumerationParameter',
    DefaultValue: 'Network Name',
    Items: ['Network Name', 'BSSID'],
    Key: 'WFWiFiDetail',
    Label: 'Get',
    RequiredResources: [{
      WFParameterKey: 'WFNetworkDetailsNetwork',
      WFParameterValue: 'Wi-Fi',
      WFResourceClass: 'WFParameterRelationResource'
    }]
  }, {
    Class: 'WFEnumerationParameter',
    DefaultValue: 'Carrier Name',
    Items: ['Carrier Name', 'Radio Technology', 'Country Code'],
    Key: 'WFCellularDetail',
    Label: 'Get',
    RequiredResources: [{
      WFParameterKey: 'WFNetworkDetailsNetwork',
      WFParameterValue: 'Cellular',
      WFResourceClass: 'WFParameterRelationResource'
    }]
  }],
  SuggestedNever: true
};
exports.WFAction = WFAction;