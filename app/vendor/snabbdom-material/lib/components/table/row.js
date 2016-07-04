'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableRow;

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _style = require('../../style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TableRow(_ref) {
  var onClick = _ref.onClick;
  var style = _ref.style;
  var children = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  var styles = (0, _style.getStyle)('table', style);

  return (0, _h2.default)('tr', {
    class: {
      clickable: onClick
    },
    style: Object.assign({}, styles.row, onClick ? styles.rowClickable : {}),
    on: {
      click: function click(e) {
        return onClick ? onClick(e) : null;
      }
    }
  }, children);
}