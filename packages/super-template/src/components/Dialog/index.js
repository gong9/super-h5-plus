import React from "react";
import schema from "./schema";
import "./index.less";

/**
 * 这里的弹框状态不再由使用它的父组件控制
 * 思考：复用还是不复用？
 * 场景存在不存在弹框嵌套的问题
 * !notice 预览态
 */

const Dialog = () => {
  /** 
   * 
   */
  const handleClose = () => {};

  return (
    <div className="super-dialog">
      <div className="outside" />
      <div className="inside">
        <div>这是一个弹框</div>
        <button onClick={handleClose}>关闭</button>
      </div>
    </div>
  );
};

Dialog.schema = schema;
export default Dialog;
