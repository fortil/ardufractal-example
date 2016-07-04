'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SidenavTitle;

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _style = require('../../style');

var _button = require('../appbar/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function SidenavTitle(_ref) {
  var onClose = _ref.onClose;
  var _ref$showCloseButton = _ref.showCloseButton;
  var showCloseButton = _ref$showCloseButton === undefined ? false : _ref$showCloseButton;
  var style = _ref.style;
  var children = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  var styles = (0, _style.getStyle)('sidenav', style);

  return (0, _h2.default)('div', {
    style: styles.title
  }, [].concat(_toConsumableArray(showCloseButton ? [(0, _button2.default)({
    onClick: onClose,
    style: styles.closeButton
  }, [(0, _h2.default)('svg', {
    style: styles.closeIcon,
    attrs: {
      fill: styles.closeIcon.color,
      height: 24,
      viewBox: '0 0 24 24',
      width: 24
    }
  }, [(0, _h2.default)('path', { attrs: { d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' } }), (0, _h2.default)('path', { attrs: { d: 'M0 0h24v24H0z', fill: 'none' } })])])] : []), _toConsumableArray(Array.isArray(children) ? children : [children])));
}