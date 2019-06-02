"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ActionIcon = _interopRequireDefault(require("../ActionIcon"));

var _utils = require("../utils");

var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(_ref) {
  var _classList;

  var data = _ref.data;
  return _react.default.createElement("div", {
    className: (0, _utils.classList)((_classList = {}, _defineProperty(_classList, _stylesModule.default.token, true), _defineProperty(_classList, _stylesModule.default.icon, data.icon), _defineProperty(_classList, _stylesModule.default.aggrandizement, data.aggrandizement), _defineProperty(_classList, _stylesModule.default.global, data.global), _classList))
  }, data.icon && _react.default.createElement(_ActionIcon.default, {
    name: data.icon,
    className: _stylesModule.default.icon
  }), data.name, data.aggrandizement && _react.default.createElement("div", {
    className: _stylesModule.default.aggrandizement
  }, data.aggrandizement));
};

exports.default = _default;