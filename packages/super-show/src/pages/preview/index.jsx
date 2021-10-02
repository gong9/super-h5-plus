import React, { useEffect, useState } from "react";
import renderJson from "../../util/jsonRender";
import "./index.css";

let id = 0;

const PreView = () => {
  const [currentCacheCopm, setCurrentCacheCopm] = useState([]);

  /** 获取编辑器中操作中预览组件信息 */
  useEffect(() => {
    window.addEventListener("message", ({ data }) => {
      setCurrentCacheCopm(data.currentCacheCopm);
    });
  }, []);

  /** 计算每个容器的实际高度，返回编辑器 */
  useEffect(() => {
    const contents = document.querySelectorAll(".content");
    for (let i = 0; i < contents.length; i++) {
      currentCacheCopm[i].clientHeight = contents[i].clientHeight;
    }
    window.parent.postMessage({ currentCacheCopm }, "*");
  }, [currentCacheCopm]);

  /** 获取处于操作态的组件 */
  const getCurrentOperation = (compIndex) => {
    window.parent.postMessage({ compActiveIndex: compIndex }, "*");
  };

  return (
    <div className="preview">
      {currentCacheCopm.length > 0 &&
        currentCacheCopm.map((comp, index) => {
          return (
            <div
              className="content"
              key={id++}
              onClick={() => getCurrentOperation(index)}
            >
              {renderJson(comp)}
            </div>
          );
        })}
    </div>
  );
};

export default PreView;
