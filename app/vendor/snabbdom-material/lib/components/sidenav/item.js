'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SidenavItem;

var _style = require('../../style');

var _item = require('../menu/item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SidenavItem(_ref) {
  var icon = _ref.icon;
  var onClick = _ref.onClick;
  var onClose = _ref.onClose;
  var _ref$selected = _ref.selected;
  var selected = _ref$selected === undefined ? false : _ref$selected;
  var _ref$showIcon = _ref.showIcon;
  var showIcon = _ref$showIcon === undefined ? false : _ref$showIcon;
  var style = _ref.style;
  var children = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  var styles = (0, _style.getStyle)('sidenav', style);

  return (0, _item2.default)({
    icon: icon,
    onClick: onClick,
    onClose: onClose,
    selected: false,
    showIcon: showIcon,
    style: {
      item: Object.assign({}, styles.item, selected ? styles.itemSelected : {})
    }
  }, children);
}