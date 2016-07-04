'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AppbarTitle;

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _style = require('../../style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AppbarTitle(_ref) {
  var style = _ref.style;
  var children = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  var styles = (0, _style.getStyle)('appbar.title', style);

  return (0, _h2.default)('div', {
    style: styles
  }, children);
}