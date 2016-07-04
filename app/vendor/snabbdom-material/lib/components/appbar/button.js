'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AppbarButton;

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _waves = require('../helpers/waves');

var _waves2 = _interopRequireDefault(_waves);

var _style = require('../../style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AppbarButton(_ref) {
  var onClick = _ref.onClick;
  var _ref$href = _ref.href;
  var href = _ref$href === undefined ? '' : _ref$href;
  var style = _ref.style;
  var children = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  var styles = (0, _style.getStyle)('appbar.button', style);
  var enabled = onClick || href;

  return (0, _h2.default)('div', {
    style: styles.container
  }, [(0, _h2.default)((href ? 'a' : 'div') + '.waves-circle', {
    class: {
      'waves-light': styles.lightWaves
    },
    hook: {
      insert: function insert(vnode) {
        return enabled ? _waves2.default.attach(vnode.elm) : null;
      }
    },
    on: {
      click: function click(e) {
        return onClick ? onClick(e) : null;
      }
    },
    props: {
      href: href
    },
    style: Object.assign({}, styles.button, enabled ? styles.enabled : styles.disabled)
  }, children)]);
}