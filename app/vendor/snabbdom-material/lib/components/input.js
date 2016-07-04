'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Input;

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _style = require('../style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Input(_ref) {
  var _ref$isFocused = _ref.isFocused;
  var isFocused = _ref$isFocused === undefined ? false : _ref$isFocused;
  var _ref$isError = _ref.isError;
  var isError = _ref$isError === undefined ? false : _ref$isError;
  var _ref$isSuccess = _ref.isSuccess;
  var isSuccess = _ref$isSuccess === undefined ? false : _ref$isSuccess;
  var _ref$label = _ref.label;
  var label = _ref$label === undefined ? '' : _ref$label;
  var _ref$message = _ref.message;
  var message = _ref$message === undefined ? '' : _ref$message;
  var onChange = _ref.onChange;
  var onClick = _ref.onClick;
  var onFocus = _ref.onFocus;
  var onBlur = _ref.onBlur;
  var _ref$readOnly = _ref.readOnly;
  var readOnly = _ref$readOnly === undefined ? false : _ref$readOnly;
  var style = _ref.style;
  var _ref$type = _ref.type;
  var type = _ref$type === undefined ? 'text' : _ref$type;
  var _ref$value = _ref.value;
  var value = _ref$value === undefined ? '' : _ref$value;

  var styles = (0, _style.getStyle)('input', style);
  var labelColor = {
    color: isError ? styles.errorColor : isSuccess ? styles.successColor : styles.labelColor
  };

  return (0, _h2.default)('div', {
    style: styles.container
  }, [(0, _h2.default)('input', {
    on: {
      click: function click(e) {
        return onClick ? onClick(e) : null;
      },
      focus: function focus(e) {
        return onFocus ? onFocus(e) : null;
      },
      blur: function blur(e) {
        return onBlur ? setTimeout(function () {
          return onBlur(e);
        }, 0) : null;
      },
      input: function input(e) {
        return onChange ? onChange(e) : null;
      }
    },
    style: styles.input,
    props: {
      type: type,
      value: value,
      readOnly: readOnly,
      required: true
    }
  }), (0, _h2.default)('span', {
    style: Object.assign({
      backgroundColor: labelColor.color
    }, styles.bar, isError || isSuccess || isFocused ? styles.barFocused : {})
  }), (0, _h2.default)('label', {
    style: Object.assign({}, styles.label, !isFocused ? {} : labelColor, isFocused || value ? styles.labelFocused : {})
  }, label), (0, _h2.default)('div', {
    style: Object.assign({}, styles.message, {
      color: isError ? styles.errorColor : ''
    })
  }, message)]);
}