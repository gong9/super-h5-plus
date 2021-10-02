import React from "react";
import "./index.less";
import schema from "./schema";

const Button = () => {
  return (
    <div className="super-btn">
      <button
        onClick={() => {
          console.log(111);
        }}
      >
        按钮
      </button>
    </div>
  );
};

Button.schema = schema;
export default Button;
