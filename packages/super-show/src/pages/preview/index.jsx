import React, { useEffect, useLayoutEffect, useState } from "react";
import renderJson from "../../util/jsonRender";
import { debounce } from "../../util/tool";
import "./index.css";

let id = 0;

const PreView = () => {
  const [currentCacheCopm, setCurrentCacheCopm] = useState([]); // all component

  // 获取编辑器中操作中预览组件信息
  useEffect(() => {
    // 获取全部组件
    window.addEventListener("message", ({ data }) => {
      const { currentCacheCopm } = data;
      if (currentCacheCopm) {
        setCurrentCacheCopm(data.currentCacheCopm);
      }
    });
    // 返给编辑器页面Y轴的滚动距离
    window.addEventListener(
      "scroll",
      debounce(() => {
        const scrollY =
          document.documentElement.scrollTop || document.body.scrollTop;
        window.parent.postMessage({ scrollY }, "*");
      })
    );
  }, []);

  // 计算每个容器的实际高度，返回编辑器
  useLayoutEffect(() => {
    const contents = document.querySelectorAll(".content");
    for (let i = 0; i < contents.length; i++) {
      currentCacheCopm[i].clientHeight = contents[i].clientHeight;
    }
    window.parent.postMessage({ currentCacheCopm }, "*");
  }, [currentCacheCopm]);

  /**
   * 获取处于操作态的组件
   * @param {numbe} compIndex
   */
  const getCurrentOperation = (compIndex) => {
    window.parent.postMessage({ compActiveIndex: compIndex }, "*");
  };

  return (
    <div className="preview">
      {currentCacheCopm.length > 0 &&
        currentCacheCopm.map((comp, index) => {
          // 同理 key 忽略diff优化
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
