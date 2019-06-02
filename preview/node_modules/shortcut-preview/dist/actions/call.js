"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'com.apple.mobilephone.call';
exports.identifier = identifier;
var icon = 'Phone';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFStartCallAction',
  ActionKeywords: ['phone', 'number', 'dial', 'mobile', 'telephone'],
  AppIdentifier: 'com.apple.mobilephone',
  Description: {
    DescriptionSummary: 'Calls the phone number passed in as input.'
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['WFPhoneNumber', 'NSString']
  },
  InputPassthrough: true,
  LastModifiedDate: '2018-10-09T05:00:00.000Z',
  Name: 'Call',
  Parameters: [{
    Class: 'WFIntentAppPickerParameter',
    DefaultValue: 'com.apple.TelephonyUtilities.PhoneIntentHandler',
    Hidden: true,
    IntentName: 'INStartAudioCallIntent',
    Key: 'IntentAppIdentifier',
    Label: 'App'
  }],
  RequiredResources: ['WFContactAccessResource'],
  WFStartCallActionType: 'Phone'
};
exports.WFAction = WFAction;