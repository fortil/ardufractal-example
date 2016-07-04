'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DatePicker;

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _style = require('../style');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _dialog = require('./dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _calendar = require('./calendar');

var _calendar2 = _interopRequireDefault(_calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DatePicker(_ref) {
  var _ref$isOpen = _ref.isOpen;
  var isOpen = _ref$isOpen === undefined ? false : _ref$isOpen;
  var _ref$locale = _ref.locale;
  var locale = _ref$locale === undefined ? 'en' : _ref$locale;
  var _ref$month = _ref.month;
  var month = _ref$month === undefined ? new Date().getMonth() : _ref$month;
  var onCancel = _ref.onCancel;
  var onChange = _ref.onChange;
  var onNavigate = _ref.onNavigate;
  var onOk = _ref.onOk;
  var pickingValue = _ref.pickingValue;
  var screenInfo = _ref.screenInfo;
  var style = _ref.style;
  var validDays = _ref.validDays;
  var _ref$year = _ref.year;
  var year = _ref$year === undefined ? new Date().getFullYear() : _ref$year;

  var styles = (0, _style.getStyle)('datepicker', style);
  var isPortrait = screenInfo.isPortrait;

  var displayDate = pickingValue ? (0, _moment2.default)(pickingValue) : (0, _moment2.default)({ year: year, month: month, day: 1 });
  displayDate.locale(locale);

  var dateLines = !pickingValue ? [displayDate.format('MMM')] : isPortrait ? [displayDate.format('ddd MMM D')] : [displayDate.format('ddd'), displayDate.format('MMM D')];

  return (0, _dialog2.default)({
    isOpen: isOpen,
    footer: (0, _h2.default)('span', {}, [_dialog2.default.Button({
      flat: true,
      onClick: onCancel
    }, 'Cancel'), _dialog2.default.Button({
      flat: true,
      primary: true,
      onClick: pickingValue ? function () {
        return onOk({ target: { value: pickingValue } });
      } : null
    }, 'OK')]),
    width: isPortrait ? styles.portraitWidth : styles.landscapeWidth,
    height: isPortrait ? styles.portraitHeight : styles.landscapeHeight,
    hideDivider: true,
    noPadding: true,
    screenInfo: screenInfo,
    style: styles.datepicker
  }, [(0, _h2.default)('div', {
    style: Object.assign({}, styles.title, isPortrait ? styles.titlePortrait : styles.titleLandscape)
  }, [(0, _h2.default)('div', { style: styles.titleYear }, displayDate.get('year')), (0, _h2.default)('div', { style: styles.titleDate }, dateLines.map(function (line) {
    return (0, _h2.default)('div', {}, line);
  }))]), (0, _calendar2.default)({
    locale: locale,
    month: month,
    onChange: onChange,
    onNavigate: onNavigate,
    validDays: validDays,
    value: pickingValue,
    year: year,
    style: isPortrait ? styles.calendarPortrait : styles.calendarLandscape
  })]);
}