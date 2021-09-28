'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var schema = {
  "name": "button",
  "description": "按钮组件",
  "properties": {
    "type": "object",
    "properties": {
      "text": {
        "type": "string",
        "format": "text"
      }
    }
  }
};

var Button = function Button() {
  return /*#__PURE__*/React.createElement("div", {
    className: "btn"
  }, "\u6765\u81EA\u7EC4\u4EF6\u5E93\u7684\u6309\u94AE11");
};

Button.schema = schema;

var schema$1 = {
  "name": "dialog",
  "description": "弹窗组件",
  "properties": {
    "type": "object",
    "properties": {
      "text": {
        "type": "string",
        "format": "text"
      }
    }
  }
};

var Dialog = function Dialog() {
  return /*#__PURE__*/React.createElement("div", null, "dialog");
};

Dialog.schema = schema$1;

var getSchma = function getSchma(comp) {
  if (comp.schema) return comp.schema;
};

var schameMap = [getSchma(Button), getSchma(Dialog)];

exports.Button = Button;
exports.Dialog = Dialog;
exports.schameMap = schameMap;
