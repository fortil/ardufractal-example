'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fadeInOut = require('./fadeInOut');

var _fadeInOut2 = _interopRequireDefault(_fadeInOut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (variables) {
  return {
    padding: 6,
    strokeWidth: 4,
    primaryColor: variables.spinnerPrimaryColor,
    secondaryColor: variables.spinnerSecodaryColor,
    container: {
      position: 'relative',
      margin: '0 auto'
    },
    overlay: Object.assign({
      zIndex: '1100',
      position: 'fixed',
      top: '100px',
      left: '50%',
      borderRadius: '50%'
    }, (0, _fadeInOut2.default)(variables))
  };
};