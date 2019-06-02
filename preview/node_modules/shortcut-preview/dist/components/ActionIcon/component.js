"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _icons = _interopRequireDefault(require("./icons"));

var _utils = require("../utils");

var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(_ref) {
  var _objectSpread3;

  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'Placeholder' : _ref$name,
      className = _ref.className;

  if (name === 'Calendar') {
    var _objectSpread2;

    var _toLocaleDateString$s = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric'
    }).split(' '),
        _toLocaleDateString$s2 = _slicedToArray(_toLocaleDateString$s, 2),
        day = _toLocaleDateString$s2[0],
        weekday = _toLocaleDateString$s2[1];

    return _react.default.createElement("div", {
      className: (0, _utils.classList)(_objectSpread((_objectSpread2 = {}, _defineProperty(_objectSpread2, _stylesModule.default.icon, true), _defineProperty(_objectSpread2, _stylesModule.default['i-calendar'], true), _objectSpread2), className && _defineProperty({}, className, true)))
    }, _react.default.createElement("span", null, weekday), _react.default.createElement("span", null, day));
  }

  var index = _icons.default.indexOf(name);

  if (index === -1) index = _icons.default.indexOf('Placeholder');
  return _react.default.createElement("div", {
    className: (0, _utils.classList)(_objectSpread((_objectSpread3 = {}, _defineProperty(_objectSpread3, _stylesModule.default.icon, true), _defineProperty(_objectSpread3, _stylesModule.default["i-".concat(index)], true), _objectSpread3), className && _defineProperty({}, className, true)))
  });
};

exports.default = _default;