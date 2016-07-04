'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DialogButton;

var _style = require('../../style');

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DialogButton(props) {
  var children = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  var styles = (0, _style.getStyle)('dialog');

  if (!props.style) {
    props.style = {};
  }
  if (!props.style.button) {
    props.style.button = styles.button;
  } else {
    props.style.button = Object.assign({}, styles.button, props.style.button);
  }

  return (0, _button2.default)(props, children);
}