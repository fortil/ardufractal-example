'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fadeInOut = require('./fadeInOut');

var _fadeInOut2 = _interopRequireDefault(_fadeInOut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (variables) {
  return {
    menuTopPadding: variables.menuTopPadding,
    menuItemHeight: variables.menuItemHeight,
    container: {
      zIndex: '1000',
      position: 'relative',
      height: '0',
      overflow: 'visible'
    },
    menu: Object.assign({
      zIndex: '1001',
      padding: variables.menuTopPadding + 'px 0',
      backgroundColor: variables.menuBackgroundColor,
      color: variables.menuFontColor,
      position: 'absolute',
      overflowY: 'auto',
      scrollbar: 'width: 4px',
      top: '-8px'
    }, (0, _fadeInOut2.default)(variables)),
    iconContainer: {
      display: 'inline-block',
      width: '48px',
      lineHeight: variables.menuItemHeight + 'px',
      fontSize: '20px'
    },
    icon: {
      color: '#000000',
      position: 'relative',
      top: '4px'
    },
    item: {
      padding: '0 40px 0 24px',
      lineHeight: variables.menuItemHeight + 'px',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      display: 'block'
    },
    itemText: {
      display: 'inline-block',
      fontSize: '16px'
    },
    separator: {
      height: '8px',
      margin: '0 0 8px 0'
    }
  };
};