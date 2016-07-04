'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fadeInOut = require('./fadeInOut');

var _fadeInOut2 = _interopRequireDefault(_fadeInOut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (variables) {
  return {
    container: {
      zIndex: '1000'
    },
    dialog: Object.assign({
      position: 'fixed',
      zIndex: '1001'
    }, (0, _fadeInOut2.default)(variables)),
    button: {
      margin: '8px 8px 8px 0',
      padding: '0 8px'
    },
    titleContainer: {
      fontSize: '20px',
      fontWeight: '400',
      marginBottom: '24px'
    },
    titleContainerNoContent: {
      marginBottom: '0'
    },
    bodyContainer: {
      // overflow: 'auto',
      margin: '0 -24px',
      padding: '0 24px'
    },
    divider: {
      margin: '0'
    },
    footerContainer: {
      height: '56px',
      textAlign: 'right'
    }
  };
};