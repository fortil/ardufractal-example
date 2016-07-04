'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Divider;

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _style = require('../style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Divider(_ref) {
  var style = _ref.style;

  var styles = (0, _style.getStyle)('divider', style);

  return (0, _h2.default)('hr', {
    style: styles.divider
  });
}