import React from "react";
import "./index.less";
import schema from "./schema";

const Button = ({ defaultConfig }) => {
  const { bgcColor, btnText } = defaultConfig;
  return (
    <div className="super-btn" style={{ background: `${bgcColor}` }}>
      <button
        onClick={() => {
          console.log(111);
        }}
      >
        {btnText}
      </button>
    </div>
  );
};

Button.schema = schema;
export default Button;
