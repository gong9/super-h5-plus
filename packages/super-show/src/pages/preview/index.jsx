import React, { useEffect } from "react";
import { Button } from "super-template/build/bundle";

const PreView = () => {
  useEffect(() => {
    window.addEventListener("message", (event) => {
      console.log("受到父亲信号");
      console.log(event);
    });
    window.parent.postMessage({ height: "65px", "z-index": "100" }, "*");
  });

  return (
    <div>
      <Button />
    </div>
  );
};

export default PreView;
