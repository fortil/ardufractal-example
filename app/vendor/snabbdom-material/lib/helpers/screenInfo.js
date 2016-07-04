'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = screenInfo;

var _screenSize = require('./screenSize');

var _screenSize2 = _interopRequireDefault(_screenSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = ['xs', 'sm', 'md', 'lg'];

function screenInfo() {
  var _getScreenSize = (0, _screenSize2.default)();

  var width = _getScreenSize.width;
  var height = _getScreenSize.height;

  var size = width >= 1200 ? 4 : width >= 992 ? 3 : width >= 768 ? 2 : 1;

  return {
    size: size,
    type: types[size - 1],
    isLandscape: width >= height,
    isPortrait: width < height
  };
}