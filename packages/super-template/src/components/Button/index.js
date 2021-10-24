import React from "react";
import { openDialog } from "../../util/openDialog";

import "./index.less";
import schema from "./schema";

const Button = ({ defaultConfig }) => {
  const { bgcColor, btnText } = defaultConfig;
  return (
    <div className="super-btn" style={{ background: `${bgcColor}` }}>
      <button
        onClick={() => {
          openDialog()
        }}
      >
        {btnText}
      </button>
    </div>
  );
};

Button.schema = schema;
export default Button;
