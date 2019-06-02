"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.dnd.set';
exports.identifier = identifier;
var icon = 'DoNotDisturb';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFToggleDoNotDisturbAction',
  ActionKeywords: ['dnd', 'toggle', 'turn'],
  Description: {
    DescriptionSummary: 'Sets the device’s Do Not Disturb to on or off'
  },
  InputPassthrough: true,
  IntentIdentifier: 'sirikit.intents.custom.com.apple.DoNotDisturb.Intents.DNDToggleDoNotDisturbIntent',
  Name: 'Set Do Not Disturb',
  Parameters: [{
    Class: 'WFSwitchParameter',
    DefaultValue: false,
    IntentSlotName: 'state',
    Key: 'Enabled',
    Label: 'Do Not Disturb'
  }, {
    Class: 'WFEnumerationParameter',
    DefaultValue: 'Turned Off',
    Items: ['Turned Off', 'Time', 'I Leave', 'Event Ends'],
    Key: 'AssertionType',
    Label: 'Until',
    RequiredResources: [{
      WFParameterKey: 'Enabled',
      WFParameterValue: true,
      WFResourceClass: 'WFParameterRelationResource'
    }, {
      WFDeviceAttributes: {
        WFDeviceAttributeSystemVersion: {
          WFSystemVersion: '12.0',
          WFSystemVersionRelation: '>='
        }
      },
      WFResourceClass: 'WFDeviceAttributesResource'
    }]
  }, {
    Class: 'WFVariablePickerParameter',
    Description: 'The event after which to turn off Do Not Disturb',
    IntentSlotName: 'event',
    Key: 'Event',
    Label: 'Event',
    RequiredResources: [{
      WFParameterKey: 'Enabled',
      WFParameterValue: true,
      WFResourceClass: 'WFParameterRelationResource'
    }, {
      WFParameterKey: 'AssertionType',
      WFParameterValue: 'Event Ends',
      WFResourceClass: 'WFParameterRelationResource'
    }, {
      WFDeviceAttributes: {
        WFDeviceAttributeSystemVersion: {
          WFSystemVersion: '12.0',
          WFSystemVersionRelation: '>='
        }
      },
      WFResourceClass: 'WFDeviceAttributesResource'
    }]
  }, {
    Class: 'WFDateFieldParameter',
    Description: 'The time after which to turn off Do Not Disturb',
    HintDisplayMode: 'Always',
    IntentSlotName: 'duration',
    Key: 'Time',
    Label: 'Time',
    Placeholder: '7 PM',
    RequiredResources: [{
      WFParameterKey: 'Enabled',
      WFParameterValue: true,
      WFResourceClass: 'WFParameterRelationResource'
    }, {
      WFParameterKey: 'AssertionType',
      WFParameterValue: 'Time',
      WFResourceClass: 'WFParameterRelationResource'
    }, {
      WFDeviceAttributes: {
        WFDeviceAttributeSystemVersion: {
          WFSystemVersion: '12.0',
          WFSystemVersionRelation: '>='
        }
      },
      WFResourceClass: 'WFDeviceAttributesResource'
    }],
    TextAlignment: 'Right'
  }]
};
exports.WFAction = WFAction;