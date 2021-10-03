import React, { useState, useEffect } from "react";
import renderJson from "../../util/jsonRender";
import { getSchema } from "../../server";
import "./index.css";

let id = 0;
const View = () => {
  const [currentCacheCopm, setCurrentCacheCopm] = useState([]);

  useEffect(() => {
    getCompsInfo();
  }, []);

  /** 读取组件信息 */
  const getCompsInfo = async () => {
    let data = null;
    try {
      data = await getSchema();
    } catch (error) {
      console.error(error);
    }

    data && setCurrentCacheCopm(data.resData.currentCacheCopm);
  };

  return (
    <div className="view">
      {currentCacheCopm.length > 0 &&
        currentCacheCopm.map((comp) => {
          // 因存在相同组件，且暂时无区分必要。故先忽略diff优化
          return (
            <div className="content" key={id++}>
              {renderJson(comp)}
            </div>
          );
        })}
    </div>
  );
};

export default View;
