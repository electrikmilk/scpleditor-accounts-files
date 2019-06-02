"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.phonenumber';
exports.identifier = identifier;
var icon = 'PhoneNumber';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFPhoneNumberAction',
  ActionKeywords: ['phone', 'number', 'mobile', 'home', 'cellular', 'telephone'],
  Description: {
    DescriptionSummary: 'Passes the specified phone numbers to the next action.'
  },
  LastModifiedDate: '2015-01-11T06:00:00.000Z',
  Name: 'Phone Number',
  Output: {
    Multiple: true,
    OutputName: 'Phone Number',
    Types: ['WFPhoneNumber']
  },
  Parameters: [{
    Class: 'WFPhoneNumberFieldParameter',
    Key: 'WFPhoneNumber',
    Placeholder: 'Type in a phone number'
  }],
  RequiredResources: ['WFContactAccessResource']
};
exports.WFAction = WFAction;