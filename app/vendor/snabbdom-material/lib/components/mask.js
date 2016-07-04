'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Mask;

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _style = require('../style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Mask(_ref) {
  var _ref$isOpen = _ref.isOpen;
  var isOpen = _ref$isOpen === undefined ? false : _ref$isOpen;
  var _ref$dark = _ref.dark;
  var dark = _ref$dark === undefined ? true : _ref$dark;
  var onClick = _ref.onClick;
  var style = _ref.style;

  var styles = (0, _style.getStyle)('mask', style);

  return isOpen ? (0, _h2.default)('div', {
    style: Object.assign({}, styles.mask, dark ? styles.dark : styles.transparent),
    on: {
      click: function click(e) {
        return onClick ? onClick(e) : null;
      }
    }
  }) : (0, _h2.default)('span');
}