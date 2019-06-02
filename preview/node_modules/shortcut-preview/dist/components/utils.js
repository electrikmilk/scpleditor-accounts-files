"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classList = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var classList = function classList(classNames) {
  return Object.entries(classNames).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        className = _ref2[0],
        condition = _ref2[1];

    return condition && className;
  }).filter(function (el) {
    return el;
  }).join(' ');
};

exports.classList = classList;