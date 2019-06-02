"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFAction = exports.icon = exports.identifier = void 0;
var identifier = 'is.workflow.actions.weather.forecast';
exports.identifier = identifier;
var icon = 'Weather';
exports.icon = icon;
var WFAction = {
  ActionClass: 'WFGetWeatherForecastAction',
  ActionKeywords: ['current', 'temperature', 'visibility', 'humidity', 'pressure', 'wind', 'sunrise', 'sunset'],
  AppIdentifier: 'com.apple.weather',
  Description: {
    DescriptionAttribution: {
      Description: 'Weather information provided by ${Link}',
      Link: {
        Text: 'The Weather Channel',
        URL: 'https://www.weather.com'
      }
    },
    DescriptionSummary: 'Gets an hourly or daily weather forecast at the specified location.'
  },
  InputPassthrough: false,
  Name: 'Get Weather Forecast',
  Output: {
    Multiple: true,
    OutputName: 'Weather Conditions',
    Types: ['WFWeatherData']
  },
  Parameters: [{
    Class: 'WFEnumerationParameter',
    DefaultValue: 'Current Location',
    DisallowedVariableTypes: ['Ask', 'Variable'],
    Items: ['Current Location', 'Custom Location'],
    Key: 'WFWeatherLocation',
    Label: 'At'
  }, {
    Class: 'WFLocationFieldParameter',
    HintDisplayMode: 'Never',
    Key: 'WFWeatherCustomLocation',
    Label: 'Location',
    Placeholder: 'Cupertino, CA',
    RequiredResources: [{
      WFParameterKey: 'WFWeatherLocation',
      WFParameterValue: 'Custom Location',
      WFResourceClass: 'WFParameterRelationResource'
    }],
    TextAlignment: 'Right'
  }, {
    Class: 'WFEnumerationParameter',
    DefaultValue: 'Daily',
    Items: ['Hourly', 'Daily'],
    Key: 'WFWeatherForecastType',
    Label: 'Type'
  }],
  RequiredResources: ['WFWeatherAttributionAccessResource', 'WFLocationAccessResource'],
  UnsupportedEnvironments: ['Background']
};
exports.WFAction = WFAction;