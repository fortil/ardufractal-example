'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _paper = require('./paper');

var _paper2 = _interopRequireDefault(_paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (variables) {
  return {
    container: {
      zIndex: '1000'
    },
    sidenav: {
      zIndex: '1001',
      position: 'fixed',
      top: '0',
      bottom: '0',
      overflow: 'auto',
      width: variables.sidenavWidth + 'px',
      left: '-' + (variables.sidenavWidth + 10) + 'px',
      transition: 'left ' + variables.transitionTime + ' ease-out',
      delayed: {
        left: '0'
      },
      remove: {
        left: '-' + (variables.sidenavWidth + 10) + 'px'
      }
    },
    mini: {
      position: 'absolute',
      top: variables.appbarHeight + 'px',
      left: '0',
      bottom: '0',
      width: '62px',
      marginLeft: '-2px',
      overflow: 'hidden'
    },
    title: Object.assign({
      height: variables.appbarHeight + 'px',
      lineHeight: '32px',
      padding: '16px 8px 0 16px',
      fontSize: '20px',
      marginBottom: '8px'
    }, (0, _paper2.default)(variables).divider),
    closeButton: {
      container: {
        float: 'right'
      },
      lightWaves: variables.sidenavCloseLightWaves
    },
    closeIcon: {
      color: variables.sidenavCloseIconColor,
      position: 'relative',
      top: '4px'
    },
    item: {
      padding: '8px 40px 8px 24px',
      color: variables.sidenavItemColor
    },
    itemSelected: {
      color: variables.sidenavItemSelectedColor
    }
  };
};