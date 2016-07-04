'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Col;

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Col(_ref) {
  var _ref$style = _ref.style;
  var style = _ref$style === undefined ? {} : _ref$style;
  var _ref$type = _ref.type;
  var type = _ref$type === undefined ? '' : _ref$type;
  var children = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  return (0, _h2.default)('div.' + type.split(' ').map(function (col) {
    return 'col-' + col;
  }).join('.'), {
    style: style
  }, children);
}