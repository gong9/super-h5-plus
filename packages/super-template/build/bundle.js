'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var schema = {
  "name": "button",
  "compId": "Button",
  "description": "按钮组件",
  "pic": "https://img12.360buyimg.com/ddimg/jfs/t1/206278/28/8822/54487/615539f5E4f4cb5ab/49773bdc89799e5c.png",
  "config": [{
    "name": "src",
    "label": "请选择颜色",
    "type": "string",
    "format": "color"
  }],
  "defaultConfig": {
    "src": "https://img11.360buyimg.com/ddimg/jfs/t1/88856/35/18313/1750299/6156d725E08d3adea/c3a6bd820350230c.png"
  }
};

var Button = function Button() {
  return /*#__PURE__*/React.createElement("div", {
    className: "super-btn"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      console.log(111);
    }
  }, "\u6309\u94AE"));
};

Button.schema = schema;

var schema$1 = {
  "name": "dialog",
  "compId": "Dialog",
  "description": "弹窗组件",
  "pic": "https://img11.360buyimg.com/ddimg/jfs/t1/97204/11/18195/74905/61553bb8E9ba92a0d/8d59c5db08ccd759.png",
  "config": [{
    "name": "dialogText",
    "label": "请填写弹框文案",
    "type": "string",
    "format": "text"
  }],
  "defaultConfig": {
    "dialogText": "默认弹框文案"
  }
};

var Dialog = function Dialog() {
  return /*#__PURE__*/React.createElement("div", {
    className: "super-dialog"
  }, /*#__PURE__*/React.createElement("div", null, "\u8FD9\u662F\u4E00\u4E2A\u5F39\u6846\u7EC4\u4EF6"));
};

Dialog.schema = schema$1;

var schema$2 = {
  "name": "image",
  "compId": "Image",
  "description": "图片组件",
  "pic": "https://img11.360buyimg.com/ddimg/jfs/t1/88856/35/18313/1750299/6156d725E08d3adea/c3a6bd820350230c.png",
  "config": [{
    "name": "src",
    "label": "请填写图片地址",
    "type": "string",
    "format": "text"
  }],
  "defaultConfig": {
    "src": "https://img11.360buyimg.com/ddimg/jfs/t1/88856/35/18313/1750299/6156d725E08d3adea/c3a6bd820350230c.png"
  }
};

var Image = function Image() {
  return /*#__PURE__*/React.createElement("div", {
    className: "super-image"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://img11.360buyimg.com/ddimg/jfs/t1/88856/35/18313/1750299/6156d725E08d3adea/c3a6bd820350230c.png"
  }));
};

Image.schema = schema$2;

var getSchma = function getSchma(comp) {
  if (comp.schema) return comp.schema;
};

var schameMap = [getSchma(Button), getSchma(Dialog), getSchma(Image)];

exports.Button = Button;
exports.Dialog = Dialog;
exports.Image = Image;
exports.schameMap = schameMap;
