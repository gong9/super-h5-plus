import React from "react";
import schema from "./schema";
import './index.less'
const Dialog = () => {
  return (
    <div className="super-dialog">
      <div>这是一个弹框组件</div>
    </div>
  );
};

Dialog.schema = schema;
export default Dialog;
