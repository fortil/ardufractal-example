'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableToolbar;

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TableToolbar(_ref) {
  var _ref$colSpan = _ref.colSpan;
  var colSpan = _ref$colSpan === undefined ? 1 : _ref$colSpan;
  var style = _ref.style;
  var children = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  return (0, _h2.default)('tr.toobar', {}, [(0, _h2.default)('th', {
    props: {
      colSpan: colSpan
    },
    style: Object.assign({
      paddingLeft: '0'
    }, style)
  }, children)]);
}