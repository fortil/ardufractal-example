'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MenuItem;

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _style = require('../../style');

var _waves = require('../helpers/waves');

var _waves2 = _interopRequireDefault(_waves);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function MenuItem(_ref) {
  var icon = _ref.icon;
  var onClick = _ref.onClick;
  var onClose = _ref.onClose;
  var _ref$selected = _ref.selected;
  var selected = _ref$selected === undefined ? false : _ref$selected;
  var _ref$showIcon = _ref.showIcon;
  var showIcon = _ref$showIcon === undefined ? false : _ref$showIcon;
  var style = _ref.style;
  var children = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  var styles = (0, _style.getStyle)('menu', style);
  var iconContainer = null;
  if (showIcon) {
    var iconElement = selected ? (0, _h2.default)('svg', {
      attrs: {
        fill: styles.icon.color,
        height: 24,
        viewBox: '0 0 24 24',
        width: 24
      },
      style: styles.icon
    }, [(0, _h2.default)('path', { attrs: { d: 'M0 0h24v24H0z', fill: 'none' } }), (0, _h2.default)('path', { attrs: { d: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' } })]) : icon;
    iconContainer = [(0, _h2.default)('div', {
      style: styles.iconContainer
    }, [iconElement || ' '])];
  } else {
    iconContainer = [];
  }

  return (0, _h2.default)('div.menu-item', {
    hook: {
      insert: function insert(vnode) {
        return _waves2.default.attach(vnode.elm);
      }
    },
    style: styles.item,
    on: {
      click: function click(e) {
        if (typeof onClose === 'function') {
          onClose(e);
        }
        if (typeof onClick === 'function') {
          onClick(e);
        }
      }
    }
  }, [].concat(_toConsumableArray(iconContainer), [(0, _h2.default)('div', {
    style: styles.itemText
  }, children)]));
}