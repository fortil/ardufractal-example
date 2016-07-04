'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _style = require('../../style');

var _toolbar = require('./toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function Table(_ref) {
  var style = _ref.style;
  var children = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  var styles = (0, _style.getStyle)('table', style);

  return (0, _h2.default)('table.material-table', {
    style: styles.table
  }, children);
};

Table.Toolbar = _toolbar2.default;
Table.Row = _row2.default;

exports.default = Table;