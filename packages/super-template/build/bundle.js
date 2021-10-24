'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactDom = require('react-dom');

var dialogContent = document.createElement("div");
var body = document.body;
body.appendChild(dialogContent);
var openDialog = function openDialog() {
  console.log(reactDom.render( /*#__PURE__*/React.createElement(React.Fragment, null, "nihao"), dialogContent));
};

var schema = {
  "name": "button",
  "compId": "Button",
  "description": "按钮组件",
  "pic": "https://img12.360buyimg.com/ddimg/jfs/t1/206278/28/8822/54487/615539f5E4f4cb5ab/49773bdc89799e5c.png",
  "config": [{
    "name": "bgcColor",
    "label": "按钮颜色",
    "type": "string",
    "format": "color"
  }, {
    "name": "btnText",
    "label": "按钮文案",
    "type": "string",
    "format": "text"
  }],
  "defaultConfig": {
    "btnText": "这是一个按钮",
    "bgcColor": "#333333"
  }
};

var Button = function Button(_ref) {
  var defaultConfig = _ref.defaultConfig;
  var bgcColor = defaultConfig.bgcColor,
      btnText = defaultConfig.btnText;
  return /*#__PURE__*/React.createElement("div", {
    className: "super-btn",
    style: {
      background: "".concat(bgcColor)
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      openDialog();
    }
  }, btnText));
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

/**
 * 这里的弹框状态不再由使用它的父组件控制
 * !notice 预览态
 */

var Dialog = function Dialog() {
  return /*#__PURE__*/React.createElement("div", {
    className: "super-dialog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "outside"
  }), /*#__PURE__*/React.createElement("div", {
    className: "inside"
  }, /*#__PURE__*/React.createElement("div", null, "\u8FD9\u662F\u4E00\u4E2A\u5F39\u6846")));
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
