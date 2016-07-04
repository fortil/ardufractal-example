'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Spinner;

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _style = require('../style');

var _paper = require('./paper');

var _paper2 = _interopRequireDefault(_paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Spinner(_ref) {
  var _ref$inline = _ref.inline;
  var inline = _ref$inline === undefined ? false : _ref$inline;
  var _ref$isOpen = _ref.isOpen;
  var isOpen = _ref$isOpen === undefined ? false : _ref$isOpen;
  var _ref$primary = _ref.primary;
  var primary = _ref$primary === undefined ? false : _ref$primary;
  var _ref$secondary = _ref.secondary;
  var secondary = _ref$secondary === undefined ? false : _ref$secondary;
  var _ref$size = _ref.size;
  var size = _ref$size === undefined ? 30 : _ref$size;
  var style = _ref.style;

  var styles = (0, _style.getStyle)('spinner', style);

  var spinner = (0, _h2.default)('div', {
    style: Object.assign({
      width: size + 'px',
      height: size + 'px'
    }, styles.container)
  }, [(0, _h2.default)('svg', {
    style: {
      animation: 'spinner-rotate 2s linear infinite',
      position: 'relative',
      zoom: '' + size / 100,
      width: '100px',
      height: '100px'
    }
  }, [(0, _h2.default)('circle', {
    attrs: {
      fill: 'none',
      stroke: primary ? styles.primaryColor : secondary ? styles.secondaryColor : null,
      cx: 50,
      cy: 50,
      r: 48,
      'stroke-width': styles.strokeWidth,
      'stroke-miterlimit': 10
    },
    style: {
      strokeDasharray: '1,400',
      strokeDashoffset: '0',
      animation: 'spinner-dash 1.5s ease-in-out infinite' + (!primary && !secondary ? ', spinner-color 6s ease-in-out infinite' : ''),
      strokeLinecap: 'round'
    }
  })])]);

  return inline ? spinner : isOpen ? (0, _paper2.default)({
    noPadding: true,
    elevation: 1,
    style: {
      paper: Object.assign({
        marginLeft: '-' + (size / 2 + styles.padding) + 'px',
        width: size + styles.padding * 2 + 'px',
        height: size + styles.padding * 2 + 'px',
        padding: styles.padding + 'px'
      }, styles.overlay)
    }
  }, [spinner]) : (0, _h2.default)('span');
}