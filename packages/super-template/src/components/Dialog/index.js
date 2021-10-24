import React from "react";
import schema from "./schema";
import "./index.less";

/**
 * 这里的弹框状态不再由使用它的父组件控制
 * !notice 预览态
 */

const Dialog = () => {
  return (
    <div className="super-dialog">
      <div className="outside"></div>
      <div className="inside">
        <div>这是一个弹框</div>
      </div>
    </div>
  );
};

Dialog.schema = schema;
export default Dialog;
