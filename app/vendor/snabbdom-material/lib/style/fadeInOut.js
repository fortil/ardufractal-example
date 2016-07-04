'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (variables) {
  return {
    opacity: '0',
    transition: 'opacity ' + variables.transitionTime,
    delayed: {
      opacity: '1'
    },
    remove: {
      opacity: '0'
    }
  };
};