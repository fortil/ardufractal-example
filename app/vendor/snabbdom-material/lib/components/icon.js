'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Icon;

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _style = require('../style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Icon(_ref) {
  var name = _ref.name;
  var style = _ref.style;

  var styles = (0, _style.getStyle)('icon', style);
  return (0, _h2.default)('i.icon-' + name, {
    style: styles
  });
}