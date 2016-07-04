'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _style = require('../../style');

var _mask = require('../mask');

var _mask2 = _interopRequireDefault(_mask);

var _paper = require('../paper');

var _paper2 = _interopRequireDefault(_paper);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _separator = require('./separator');

var _separator2 = _interopRequireDefault(_separator);

var _screenSize = require('../../helpers/screenSize');

var _screenSize2 = _interopRequireDefault(_screenSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var insert = function insert(styles) {
  return function (vnode) {
    var _getScreenSize = (0, _screenSize2.default)();

    var screenHeight = _getScreenSize.height;

    var _vnode$elm$getBoundin = vnode.elm.getBoundingClientRect();

    var top = _vnode$elm$getBoundin.top;
    var bottom = _vnode$elm$getBoundin.bottom;

    var originalHeight = bottom - top;
    var minHeight = styles.menuItemHeight * 8 + styles.menuTopPadding * 2;

    var offsetTop = top < 6 ? Math.ceil((top - 16) / (styles.menuItemHeight * -1)) * styles.menuItemHeight : 0;
    var offsetBottom = bottom > screenHeight - 6 ? Math.ceil((bottom - screenHeight + 16) / styles.menuItemHeight) * styles.menuItemHeight : 0;
    var height = bottom - top - offsetTop - offsetBottom;
    if (height < minHeight) {
      height = minHeight > originalHeight ? originalHeight : minHeight;
      if (top + offsetTop + height + 16 > screenHeight) {
        offsetTop -= top + offsetTop + height + 16 - screenHeight;
      }
    }
    vnode.elm.style.top = vnode.elm.offsetTop + offsetTop + 'px';
    vnode.elm.style.height = height + 'px';
    vnode.elm.scrollTop += offsetTop;
  };
};

var Menu = function Menu(_ref) {
  var _ref$isOpen = _ref.isOpen;
  var isOpen = _ref$isOpen === undefined ? false : _ref$isOpen;
  var onClick = _ref.onClose;
  var _ref$rightAlign = _ref.rightAlign;
  var rightAlign = _ref$rightAlign === undefined ? false : _ref$rightAlign;
  var screenInfo = _ref.screenInfo;
  var style = _ref.style;
  var children = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  var styles = (0, _style.getStyle)('menu', style);
  var menuStyle = rightAlign ? {
    right: '0'
  } : {};

  return (0, _h2.default)('div', {
    style: styles.container
  }, [(0, _mask2.default)({
    dark: false,
    isOpen: isOpen,
    onClick: onClick
  })].concat(_toConsumableArray(isOpen ? [(0, _paper2.default)({
    noPadding: true,
    elevation: 1,
    hook: {
      insert: insert(styles)
    },
    style: {
      paper: Object.assign(menuStyle, styles.menu)
    }
  }, children)] : [])));
};

Menu.Item = _item2.default;
Menu.Separator = _separator2.default;

exports.default = Menu;