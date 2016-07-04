'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fadeInOut = require('./fadeInOut');

var _fadeInOut2 = _interopRequireDefault(_fadeInOut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (variables) {
  return {
    mask: {
      position: 'fixed',
      zIndex: '1000',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      backgroundColor: variables.maskBackgroundColor
    },
    transparent: {
      opacity: '0'
    },
    dark: (0, _fadeInOut2.default)(variables)
  };
};