'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _style = require('../../style');

var _mask = require('../mask');

var _mask2 = _interopRequireDefault(_mask);

var _paper = require('../paper');

var _paper2 = _interopRequireDefault(_paper);

var _divider = require('../divider');

var _divider2 = _interopRequireDefault(_divider);

var _screenSize = require('../../helpers/screenSize');

var _screenSize2 = _interopRequireDefault(_screenSize);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Dialog = function Dialog(_ref) {
  var footer = _ref.footer;
  var _ref$height = _ref.height;
  var height = _ref$height === undefined ? 130 : _ref$height;
  var _ref$hideDivider = _ref.hideDivider;
  var hideDivider = _ref$hideDivider === undefined ? false : _ref$hideDivider;
  var _ref$isOpen = _ref.isOpen;
  var isOpen = _ref$isOpen === undefined ? false : _ref$isOpen;
  var _ref$noPadding = _ref.noPadding;
  var noPadding = _ref$noPadding === undefined ? false : _ref$noPadding;
  var screenInfo = _ref.screenInfo;
  var style = _ref.style;
  var title = _ref.title;
  var _ref$width = _ref.width;
  var width = _ref$width === undefined ? 280 : _ref$width;
  var children = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  var styles = (0, _style.getStyle)('dialog', style);
  var screenSize = (0, _screenSize2.default)();

  var top = screenSize.height / 2 - height / 2;
  top = top < 24 ? 24 : top;
  var maxWidth = width > screenSize.width - 80 ? screenSize.width - 80 : width;
  var left = (screenSize.width - maxWidth) / 2;
  var maxHeight = screenSize.height - 48;
  var maxContentHeight = maxHeight - 48;

  var footerContainer = null;
  if (footer) {
    footerContainer = (0, _h2.default)('div', {
      style: styles.footerContainer
    }, [].concat(_toConsumableArray(hideDivider ? [] : [(0, _divider2.default)({
      style: {
        divider: styles.divider
      }
    })]), [footer]));
    maxContentHeight -= 56;
  } else {
    footerContainer = (0, _h2.default)('span');
  }

  var titleContainer = void 0;
  if (title) {
    titleContainer = [(0, _h2.default)('div', {
      style: Object.assign({}, styles.titleContainer, children ? {} : styles.titleContainerNoContent)
    }, typeof title === 'string' ? title : [title])];
    maxContentHeight -= 49;
  } else {
    titleContainer = [];
  }

  return (0, _h2.default)('div', {
    style: styles.container
  }, [(0, _mask2.default)({ isOpen: isOpen })].concat(_toConsumableArray(isOpen ? [(0, _paper2.default)({
    elevation: 2,
    noPadding: true,
    style: {
      paper: Object.assign({
        top: top + 'px',
        left: left + 'px',
        width: maxWidth + 'px',
        maxHeight: maxHeight + 'px'
      }, styles.dialog)
    }
  }, [(0, _h2.default)('div', {
    style: { padding: noPadding ? '0' : '24px' }
  }, [].concat(_toConsumableArray(titleContainer), [(0, _h2.default)('div', {
    style: Object.assign({
      maxHeight: maxContentHeight + 'px'
    }, styles.bodyContainer)
  }, children)])), footerContainer])] : [])));
};

Dialog.Button = _button2.default;

exports.default = Dialog;