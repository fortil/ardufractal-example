'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Form;

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _style = require('../style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Form(_ref) {
  var onSubmit = _ref.onSubmit;
  var style = _ref.style;
  var children = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  var styles = (0, _style.getStyle)('form', style);
  return (0, _h2.default)('form', {
    style: styles,
    on: {
      submit: function submit(e) {
        e.preventDefault();
        if (typeof onSubmit === 'function') {
          onSubmit(e);
        }
      }
    },
    props: {
      noValidate: true
    }
  }, children);
}