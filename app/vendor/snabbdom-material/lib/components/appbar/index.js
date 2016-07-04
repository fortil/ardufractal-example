'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _style = require('../../style');

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _title = require('./title');

var _title2 = _interopRequireDefault(_title);

var _paper = require('../paper');

var _paper2 = _interopRequireDefault(_paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Appbar = function Appbar(_ref) {
  var _ref$fixed = _ref.fixed;
  var fixed = _ref$fixed === undefined ? false : _ref$fixed;
  var style = _ref.style;
  var children = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  var styles = (0, _style.getStyle)('appbar.appbar', style);

  return (0, _h2.default)('div', {
    style: styles.container
  }, [(0, _paper2.default)({
    noPadding: true,
    elevation: 1,
    style: {
      paper: Object.assign({
        position: fixed ? 'fixed' : ''
      }, styles.appbar)
    }
  }, children)]);
};

Appbar.Button = _button2.default;
Appbar.Title = _title2.default;

exports.default = Appbar;