'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Calendar;

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _style = require('../style');

var _waves = require('./helpers/waves');

var _waves2 = _interopRequireDefault(_waves);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function getMoment(date, locale) {
  var value = (0, _moment2.default)(date);
  value.locale(locale);
  return value;
}

function Calendar(_ref) {
  var _ref$locale = _ref.locale;
  var locale = _ref$locale === undefined ? 'en' : _ref$locale;
  var _ref$month = _ref.month;
  var month = _ref$month === undefined ? new Date().getMonth() : _ref$month;
  var onChange = _ref.onChange;
  var onNavigate = _ref.onNavigate;
  var style = _ref.style;
  var _ref$titleFormat = _ref.titleFormat;
  var titleFormat = _ref$titleFormat === undefined ? 'MMMM YYYY' : _ref$titleFormat;
  var validDays = _ref.validDays;
  var value = _ref.value;
  var _ref$year = _ref.year;
  var year = _ref$year === undefined ? new Date().getFullYear() : _ref$year;

  var styles = (0, _style.getStyle)('calendar', style);

  var _onChange = function _onChange(day, validDay) {
    if (onChange && validDay) {
      onChange({ target: { value: new Date(year, month, day) } });
    }
  };

  var date = getMoment({ year: year, month: month, day: 1 }, locale);
  var localeData = _moment2.default.localeData(locale);
  var previousMonth = date.clone().subtract(1, 'months');
  var nextMonth = date.clone().add(1, 'months');
  var firstDayOfWeek = localeData.firstDayOfWeek();

  var weekdays = [];

  var _loop = function _loop(i) {
    weekdays.push(localeData.weekdaysShort({ day: function day() {
        return i;
      } })[0]);
  };

  for (var i = 0; i < 7; i++) {
    _loop(i);
  }
  if (firstDayOfWeek > 0) {
    weekdays = [].concat(_toConsumableArray(weekdays.slice(firstDayOfWeek)), _toConsumableArray(weekdays.slice(0, firstDayOfWeek)));
  }

  var colWidth = 14.28571428;
  var today = getMoment(new Date(), locale).startOf('day');

  var days = [];

  var _loop2 = function _loop2(day) {
    var dayDate = new Date(year, month, day);
    var validDay = !Array.isArray(validDays) || validDays.includes(day);
    var selectedDay = value && getMoment(value, locale).startOf('day').isSame(dayDate);
    days.push((0, _h2.default)('div', {
      style: Object.assign({
        width: colWidth + '%'
      }, styles.dayContainer, selectedDay ? styles.dayContainerSelected : !validDay ? styles.dayContainerInvalid : today.isSame(dayDate) ? Object.assign({}, styles.dayContainerToday, onChange ? styles.dayContainerSelectable : {}) : onChange ? styles.dayContainerSelectable : {}),
      on: {
        click: function click() {
          return _onChange(day, validDay);
        }
      }
    }, [(0, _h2.default)('div', {
      style: Object.assign({}, styles.day, selectedDay ? styles.daySelected : {})
    }, '' + day)]));
  };

  for (var day = 1; day <= date.daysInMonth(); day++) {
    _loop2(day);
  }

  var navigation = onNavigate ? [(0, _h2.default)('div.waves-circle', {
    hook: {
      insert: function insert(vnode) {
        return onNavigate ? _waves2.default.attach(vnode.elm) : null;
      }
    },
    style: styles.previous,
    on: {
      click: function click() {
        return onNavigate({
          target: {
            value: {
              year: previousMonth.get('year'),
              month: previousMonth.get('month')
            }
          }
        });
      }
    }
  }, [(0, _h2.default)('svg', {
    attrs: {
      fill: styles.navIcon.color,
      height: 24,
      viewBox: '0 0 24 24',
      width: 24
    },
    style: styles.navIcon
  }, [(0, _h2.default)('path', { attrs: { d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' } }), (0, _h2.default)('path', { attrs: { d: 'M0 0h24v24H0z', fill: 'none' } })])]), (0, _h2.default)('div.waves-circle', {
    hook: {
      insert: function insert(vnode) {
        return onNavigate ? _waves2.default.attach(vnode.elm) : null;
      }
    },
    style: styles.next,
    on: {
      click: function click() {
        return onNavigate({
          target: {
            value: {
              year: nextMonth.get('year'),
              month: nextMonth.get('month')
            }
          }
        });
      }
    }
  }, [(0, _h2.default)('svg', {
    attrs: {
      fill: styles.navIcon.color,
      height: 24,
      viewBox: '0 0 24 24',
      width: 24
    },
    style: styles.navIcon
  }, [(0, _h2.default)('path', { attrs: { d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' } }), (0, _h2.default)('path', { attrs: { d: 'M0 0h24v24H0z', fill: 'none' } })])])] : [];

  navigation.push((0, _h2.default)('div', {
    style: styles.title
  }, date.format(titleFormat)));

  if (date.weekday()) {
    days.unshift((0, _h2.default)('div', {
      style: Object.assign({
        width: colWidth * date.weekday() + '%'
      }, styles.padding)
    }));
  }

  return (0, _h2.default)('div', {
    style: styles.container
  }, [(0, _h2.default)('div', {}, navigation), (0, _h2.default)('div', {
    style: styles.colHeadings
  }, weekdays.map(function (day) {
    return (0, _h2.default)('div', {
      style: Object.assign({
        width: colWidth + '%'
      }, styles.dayContainer)
    }, [day]);
  })), (0, _h2.default)('div', {}, days)]);
}