import React from "react";
import { render } from "react-dom";
const dialogContent = document.createElement("div");
const body = document.body;
body.appendChild(dialogContent);

export const openDialog = () => {
  console.log(render(<>nihao</>, dialogContent));
};
