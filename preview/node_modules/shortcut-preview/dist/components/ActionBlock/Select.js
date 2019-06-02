"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Select)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      segmented: true
    });

    _defineProperty(_assertThisInitialized(_this), "node", _react.default.createRef());

    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        var node = _this2.node.current;
        if (!node) return;
        var parent = node.parentElement;
        var max = Math.max.apply(Math, _toConsumableArray(_toConsumableArray(node.children).map(function (_ref) {
          var clientWidth = _ref.clientWidth;
          return clientWidth;
        })));
        var width = _this2.props.values.length * (max + 1) + 1;
        var maxWidth = parent.clientWidth - parent.querySelector('label').clientWidth;

        if (width > maxWidth) {
          _this2.setState({
            segmented: false
          });
        } else {
          node.style.width = "".concat(width, "px");
        }

        node.style.visibility = '';
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _classList, _classList3;

      var segmented = this.state.segmented;
      var _this$props = this.props,
          value = _this$props.value,
          values = _this$props.values;
      var selected = values.includes(value) ? value : 'Choose';
      return _react.default.createElement("div", {
        ref: this.node,
        className: (0, _utils.classList)((_classList = {}, _defineProperty(_classList, _stylesModule.default.select, true), _defineProperty(_classList, _stylesModule.default.segmented, segmented), _classList)),
        style: {
          visibility: 'hidden'
        }
      }, segmented ? this.props.values.map(function (value) {
        var _classList2;

        return _react.default.createElement("div", {
          key: value,
          className: (0, _utils.classList)((_classList2 = {}, _defineProperty(_classList2, _stylesModule.default.value, true), _defineProperty(_classList2, _stylesModule.default.selected, selected === value), _classList2))
        }, value);
      }) : _react.default.createElement("div", {
        className: (0, _utils.classList)((_classList3 = {}, _defineProperty(_classList3, _stylesModule.default.value, true), _defineProperty(_classList3, _stylesModule.default.selected, true), _classList3))
      }, selected));
    }
  }]);

  return Select;
}(_react.default.Component);

exports.default = Select;