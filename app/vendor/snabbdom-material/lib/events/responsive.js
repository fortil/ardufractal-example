'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _exenv = require('exenv');

var _screenInfo = require('../helpers/screenInfo');

var _screenInfo2 = _interopRequireDefault(_screenInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var screenInfo = null;
var subscribers = {};

function resize() {
  var screen = (0, _screenInfo2.default)();

  if (!screenInfo || screen.size !== screenInfo.size || screen.isLandscape !== screenInfo.isLandscape) {
    screenInfo = screen;
    Object.keys(subscribers).forEach(function (eventHandler) {
      subscribers[eventHandler](screenInfo);
    });
  }
}

exports.default = {
  addListener: function addListener(eventHandler) {
    if (typeof eventHandler !== 'function') {
      return;
    }
    if (!screenInfo) {
      if (_exenv.canUseDOM) {
        window.addEventListener('resize', resize);
      }
      resize();
    }
    subscribers[eventHandler] = eventHandler;
    eventHandler(screenInfo);
  },
  removeListener: function removeListener(eventHandler) {
    delete subscribers[eventHandler];
  }
};