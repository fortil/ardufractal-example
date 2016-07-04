'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _style = require('../style');

var _waves = require('./helpers/waves');

var _waves2 = _interopRequireDefault(_waves);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(_ref) {
  var _ref$flat = _ref.flat;
  var flat = _ref$flat === undefined ? false : _ref$flat;
  var onClick = _ref.onClick;
  var _ref$primary = _ref.primary;
  var primary = _ref$primary === undefined ? false : _ref$primary;
  var _ref$secondary = _ref.secondary;
  var secondary = _ref$secondary === undefined ? false : _ref$secondary;
  var style = _ref.style;
  var _ref$type = _ref.type;
  var type = _ref$type === undefined ? 'button' : _ref$type;
  var children = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  var styles = (0, _style.getStyle)('button', style);
  var enabled = onClick || type === 'submit';

  var key = flat ? 'flat' : 'raised';
  var allStyles = [styles.button, enabled ? styles[key].enabled : styles[key].disabled];
  if (enabled && primary) {
    allStyles.push(styles[key].primary);
    if (style && style.button) {
      allStyles.push(style.button);
    }
  } else if (enabled && secondary) {
    allStyles.push(styles[key].secondary);
    if (style && style.button) {
      allStyles.push(style.button);
    }
  }

  return (0, _h2.default)('button.waves-button', {
    hook: {
      insert: function insert(vnode) {
        return _waves2.default.attach(vnode.elm);
      }
    },
    on: {
      click: function click(e) {
        return onClick ? onClick(e) : null;
      }
    },
    style: Object.assign.apply(Object, [{}].concat(allStyles)),
    class: {
      'waves-float': !flat && enabled,
      'waves-light': !flat && (!primary && !secondary && styles.lightWaves || primary && styles.primaryLightWaves || secondary && styles.secondaryLightWaves)
    },
    props: {
      type: type,
      disabled: !enabled
    }
  }, children);
}