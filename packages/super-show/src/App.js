import React, { useEffect } from "react";
// import { Button } from "super-template/build/bundle";
import "super-template/build/main.css";

const App = () => {
  useEffect(() => {
    window.addEventListener("message", (event) => {
      console.log(
        '受到父亲信号'
      );
      console.log(event);
    });
    window.parent.postMessage({ height: "65px", "z-index": "100" }, "*");
  });
  const watchtarget = () => {
    alert("1");

    console.log("有元素过来了");
  };

  return (
    <div onDragEnter={watchtarget}>
      <div draggable>组件8</div>
      <div>组件9</div>
    </div>
  );
};

export default App;
