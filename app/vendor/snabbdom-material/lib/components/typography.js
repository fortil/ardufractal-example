'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Typography;

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _style = require('../style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function Typography(_ref) {
  var _ref$display = _ref.display3;
  var display3 = _ref$display === undefined ? false : _ref$display;
  var _ref$display2 = _ref.display2;
  var display2 = _ref$display2 === undefined ? false : _ref$display2;
  var _ref$display3 = _ref.display1;
  var display1 = _ref$display3 === undefined ? false : _ref$display3;
  var _ref$headline = _ref.headline;
  var headline = _ref$headline === undefined ? false : _ref$headline;
  var _ref$title = _ref.title;
  var title = _ref$title === undefined ? false : _ref$title;
  var _ref$subheading = _ref.subheading;
  var subheading = _ref$subheading === undefined ? false : _ref$subheading;
  var _ref$caption = _ref.caption;
  var caption = _ref$caption === undefined ? false : _ref$caption;
  var _ref$primary = _ref.primary;
  var primary = _ref$primary === undefined ? false : _ref$primary;
  var _ref$secondary = _ref.secondary;
  var secondary = _ref$secondary === undefined ? false : _ref$secondary;
  var style = _ref.style;
  var children = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  var options = [];
  if (display3) {
    options.push('typ.display3');
  }
  if (display2) {
    options.push('typ.display2');
  }
  if (display1) {
    options.push('typ.display1');
  }
  if (headline) {
    options.push('typ.headline');
  }
  if (title) {
    options.push('typ.title');
  }
  if (subheading) {
    options.push('typ.subheading');
  }
  if (caption) {
    options.push('typ.caption');
  }
  if (primary) {
    options.push('typ.primary');
  }
  if (secondary) {
    options.push('typ.secondary');
  }
  return (0, _h2.default)('div.typography', {
    style: Object.assign.apply(Object, [{}].concat(_toConsumableArray(options.map(function (name) {
      return (0, _style.getStyle)(name, style);
    }))))
  }, children);
}