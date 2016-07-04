'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = screenSize;

var _exenv = require('exenv');

function screenSize() {
  return {
    width: _exenv.canUseDOM && (window.innerWidth || document.body.clientWidth) || 1024,
    height: _exenv.canUseDOM && (window.innerHeight || document.body.clientHeight) || 768
  };
}