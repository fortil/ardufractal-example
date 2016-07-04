'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _appbar = require('./appbar');

var _appbar2 = _interopRequireDefault(_appbar);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _calendar = require('./calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _datepicker = require('./datepicker');

var _datepicker2 = _interopRequireDefault(_datepicker);

var _dialog = require('./dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _divider = require('./divider');

var _divider2 = _interopRequireDefault(_divider);

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _mask = require('./mask');

var _mask2 = _interopRequireDefault(_mask);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var _paper = require('./paper');

var _paper2 = _interopRequireDefault(_paper);

var _select = require('./select');

var _select2 = _interopRequireDefault(_select);

var _sidenav = require('./sidenav');

var _sidenav2 = _interopRequireDefault(_sidenav);

var _spinner = require('./spinner');

var _spinner2 = _interopRequireDefault(_spinner);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _typography = require('./typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (variables) {
  var style = {
    appbar: (0, _appbar2.default)(variables),
    button: (0, _button2.default)(variables),
    calendar: (0, _calendar2.default)(variables),
    checkbox: (0, _checkbox2.default)(variables),
    datepicker: (0, _datepicker2.default)(variables),
    dialog: (0, _dialog2.default)(variables),
    divider: (0, _divider2.default)(variables),
    form: (0, _form2.default)(variables),
    icon: (0, _icon2.default)(variables),
    input: (0, _input2.default)(variables),
    mask: (0, _mask2.default)(variables),
    menu: (0, _menu2.default)(variables),
    paper: (0, _paper2.default)(variables),
    select: (0, _select2.default)(variables),
    sidenav: (0, _sidenav2.default)(variables),
    spinner: (0, _spinner2.default)(variables),
    table: (0, _table2.default)(variables),
    typ: (0, _typography2.default)(variables)
  };

  return Object.assign({
    rules: {
      body: Object.assign({
        fontFamily: 'Roboto, Noto, sans-serif',
        WebkitFontSmoothing: 'antialiased',
        WebkitTextSizeAdjust: '100%'
      }, style.typ.body),
      h1: style.typ.display3,
      h2: style.typ.display2,
      h3: style.typ.display1,
      h4: style.typ.headline,
      h5: style.typ.title
    }
  }, style);
};