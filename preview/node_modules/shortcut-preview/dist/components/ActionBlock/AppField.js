"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ActionIcon = _interopRequireDefault(require("../ActionIcon"));

var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(_ref) {
  var _classList;

  var value = _ref.value;
  var apps = new Map([['iCloud Drive', 'iCloud'], ['Dropbox', 'Dropbox']]);
  var name = value || 'iCloud Drive';
  var icon = apps.get(name);
  return _react.default.createElement("div", {
    className: (0, _utils.classList)((_classList = {}, _defineProperty(_classList, _stylesModule.default.field, true), _defineProperty(_classList, _stylesModule.default.right, true), _classList))
  }, _react.default.createElement(_ActionIcon.default, {
    name: icon
  }), name);
};

exports.default = _default;