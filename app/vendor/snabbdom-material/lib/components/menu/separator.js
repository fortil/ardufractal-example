'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MenuSeparator;

var _style = require('../../style');

var _divider = require('../divider');

var _divider2 = _interopRequireDefault(_divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MenuSeparator(_ref) {
  var style = _ref.style;

  var styles = (0, _style.getStyle)('menu', style);
  return (0, _divider2.default)({
    style: {
      divider: styles.separator
    }
  });
}