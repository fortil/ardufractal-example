'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _exenv = require('exenv');

var Waves = void 0;

if (_exenv.canUseDOM) {
  Waves = require('node-waves');

  Waves.init({
    // How long Waves effect duration
    // when it's clicked (in milliseconds)
    duration: 500,

    // Delay showing Waves effect on touch
    // and hide the effect if user scrolls
    // (0 to disable delay) (in milliseconds)
    delay: 200
  });
} else {
  Waves = {
    attach: function attach() {}
  };
}

exports.default = Waves;