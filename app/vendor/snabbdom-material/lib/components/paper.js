'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Paper;

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _style = require('../style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Paper(_ref) {
  var _ref$elevation = _ref.elevation;
  var elevation = _ref$elevation === undefined ? 1 : _ref$elevation;
  var _ref$hook = _ref.hook;
  var hook = _ref$hook === undefined ? {} : _ref$hook;
  var _ref$noPadding = _ref.noPadding;
  var noPadding = _ref$noPadding === undefined ? false : _ref$noPadding;
  var style = _ref.style;
  var children = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  var styles = (0, _style.getStyle)('paper', style);

  return (0, _h2.default)('div', {
    hook: hook,
    style: Object.assign({}, styles.paper, styles.elevation[elevation], noPadding ? {} : styles.padded)
  }, children);
}