'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Checkbox;

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _style = require('../style');

var _waves = require('./helpers/waves');

var _waves2 = _interopRequireDefault(_waves);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Checkbox(_ref) {
  var _ref$label = _ref.label;
  var label = _ref$label === undefined ? '' : _ref$label;
  var onChange = _ref.onChange;
  var _ref$readOnly = _ref.readOnly;
  var readOnly = _ref$readOnly === undefined ? false : _ref$readOnly;
  var style = _ref.style;
  var _ref$value = _ref.value;
  var value = _ref$value === undefined ? false : _ref$value;

  var styles = (0, _style.getStyle)('checkbox', style);

  var icon = value ? (0, _h2.default)('svg', {
    attrs: {
      fill: styles.iconSelected.color,
      height: 24,
      viewBox: '0 0 24 24',
      width: 24
    }
  }, [(0, _h2.default)('path', { attrs: { d: 'M0 0h24v24H0z', fill: 'none' } }), (0, _h2.default)('path', { attrs: { d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' } })]) : (0, _h2.default)('svg', {
    attrs: {
      fill: styles.icon.color,
      height: 24,
      viewBox: '0 0 24 24',
      width: 24
    }
  }, [(0, _h2.default)('path', { attrs: { d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' } }), (0, _h2.default)('path', { attrs: { d: 'M0 0h24v24H0z', fill: 'none' } })]);

  return (0, _h2.default)('label', {
    style: styles.label
  }, [(0, _h2.default)('input', {
    style: {
      display: 'none'
    },
    on: {
      change: function change(e) {
        return onChange({ target: { value: e.target.checked } });
      }
    },
    props: {
      type: 'checkbox',
      readOnly: readOnly,
      checked: !!value
    }
  }), (0, _h2.default)('div.waves-circle', {
    hook: {
      insert: function insert(vnode) {
        return _waves2.default.attach(vnode.elm);
      }
    },
    class: {
      'waves-light': styles.lightWaves
    },
    style: Object.assign({}, styles.icon, value ? styles.iconSelected : {})
  }, [icon]), label]);
}