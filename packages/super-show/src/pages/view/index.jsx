import React, { useState } from "react";
import renderJson from "../../util/jsonRender";
import { getParams } from "../../util/tool";
import './index.css'

let id = 0;
const View = () => {
    
  const [currentCacheCopm] = useState(getParams(window.location.search));

  return (
    <div className='view'>
      {currentCacheCopm.length > 0 &&
        currentCacheCopm.map((comp) => {
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
