'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Select;

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _style = require('../style');

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Select(_ref) {
  var _ref$isError = _ref.isError;
  var isError = _ref$isError === undefined ? false : _ref$isError;
  var _ref$isOpen = _ref.isOpen;
  var isOpen = _ref$isOpen === undefined ? false : _ref$isOpen;
  var _ref$isSuccess = _ref.isSuccess;
  var isSuccess = _ref$isSuccess === undefined ? false : _ref$isSuccess;
  var _ref$label = _ref.label;
  var label = _ref$label === undefined ? '' : _ref$label;
  var _ref$message = _ref.message;
  var message = _ref$message === undefined ? '' : _ref$message;
  var onChange = _ref.onChange;
  var onClose = _ref.onClose;
  var onOpen = _ref.onOpen;
  var _ref$options = _ref.options;
  var options = _ref$options === undefined ? [] : _ref$options;
  var _ref$readOnly = _ref.readOnly;
  var readOnly = _ref$readOnly === undefined ? false : _ref$readOnly;
  var screenInfo = _ref.screenInfo;
  var _ref$selected = _ref.selected;
  var selected = _ref$selected === undefined ? false : _ref$selected;
  var style = _ref.style;
  var value = _ref.value;

  var styles = (0, _style.getStyle)('select', style);
  var selectedIndex = 0;
  var displayValue = '';
  var menuItems = options.map(function (option, index) {
    var isSelected = selected && option.label === selected.label || value !== null && option.value === value;
    if (!selectedIndex && isSelected) {
      selectedIndex = index;
      displayValue = option.label;
    }
    return _menu2.default.Item({
      style: isSelected ? styles.selected : null,
      onClick: function onClick() {
        return onChange({ target: option });
      },
      onClose: onClose
    }, option.label);
  });

  var top = styles.menuTopOffset - selectedIndex * styles.menuItemHeight;

  return (0, _h2.default)('div', {
    style: styles.container
  }, [(0, _menu2.default)({
    style: (0, _deepmerge2.default)({
      menu: {
        top: top + 'px'
      }
    }, styles.menu),
    isOpen: isOpen && !readOnly && !!menuItems,
    screenInfo: screenInfo,
    onClose: onClose
  }, menuItems), (0, _h2.default)('svg', {
    attrs: {
      fill: styles.dropDownIcon.color,
      height: 24,
      viewBox: '0 0 24 24',
      width: 24
    },
    style: styles.dropDownIcon
  }, [(0, _h2.default)('path', { attrs: { d: 'M7 10l5 5 5-5z' } }), (0, _h2.default)('path', { attrs: { d: 'M0 0h24v24H0z', fill: 'none' } })]), (0, _input2.default)({
    style: styles.input,
    isError: isError,
    isSuccess: isSuccess,
    isFocused: isOpen,
    label: label,
    message: message,
    onClick: onOpen,
    readOnly: readOnly,
    value: '' + displayValue
  })]);
}