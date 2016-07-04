'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _style = require('../../style');

var _mask = require('../mask');

var _mask2 = _interopRequireDefault(_mask);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _title = require('./title');

var _title2 = _interopRequireDefault(_title);

var _paper = require('../paper');

var _paper2 = _interopRequireDefault(_paper);

var _separator = require('../menu/separator');

var _separator2 = _interopRequireDefault(_separator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Sidenav = function Sidenav(_ref) {
  var _ref$isOpen = _ref.isOpen;
  var isOpen = _ref$isOpen === undefined ? false : _ref$isOpen;
  var _ref$mini = _ref.mini;
  var mini = _ref$mini === undefined ? false : _ref$mini;
  var onClose = _ref.onClose;
  var style = _ref.style;
  var children = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  var styles = (0, _style.getStyle)('sidenav', style);

  return mini ? (0, _paper2.default)({
    noPadding: true,
    style: {
      paper: styles.mini
    }
  }, children) : (0, _h2.default)('div', {
    style: styles.container
  }, [(0, _mask2.default)({
    onClick: onClose,
    isOpen: isOpen
  })].concat(_toConsumableArray(isOpen ? [(0, _paper2.default)({
    noPadding: true,
    elevation: 2,
    style: {
      paper: styles.sidenav
    }
  }, children)] : [])));
};

Sidenav.Item = _item2.default;
Sidenav.Separator = _separator2.default;
Sidenav.Title = _title2.default;

exports.default = Sidenav;