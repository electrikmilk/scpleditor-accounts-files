"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(_ref) {
  var _objectSpread2;

  var value = _ref.value,
      _ref$data = _ref.data,
      Placeholder = _ref$data.Placeholder,
      _ref$data$Multiline = _ref$data.Multiline,
      Multiline = _ref$data$Multiline === void 0 ? false : _ref$data$Multiline,
      _ref$data$TextAlignme = _ref$data.TextAlignment,
      TextAlignment = _ref$data$TextAlignme === void 0 ? 'Left' : _ref$data$TextAlignme,
      className = _ref.className;
  var hasPlaceholder = value === undefined || value === '';
  return _react.default.createElement("div", {
    className: (0, _utils.classList)(_objectSpread((_objectSpread2 = {}, _defineProperty(_objectSpread2, _stylesModule.default.field, true), _defineProperty(_objectSpread2, _stylesModule.default.right, TextAlignment === 'Right'), _defineProperty(_objectSpread2, _stylesModule.default.multiline, Multiline), _defineProperty(_objectSpread2, _stylesModule.default.placeholder, hasPlaceholder), _objectSpread2), className && _defineProperty({}, className, true)))
  }, hasPlaceholder ? Placeholder : value);
};

exports.default = _default;