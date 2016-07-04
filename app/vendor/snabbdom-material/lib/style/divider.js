'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _paper = require('./paper');

var _paper2 = _interopRequireDefault(_paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (variables) {
  return {
    divider: Object.assign({
      border: '0',
      height: '1px',
      margin: '16px 0'
    }, (0, _paper2.default)(variables).divider)
  };
};