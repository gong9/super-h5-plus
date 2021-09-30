import React, { useEffect, useState } from "react";
import { Button } from "super-template/build/bundle";
let id = 0;
const PreView = () => {
  const [currentCacheCopm, setCurrentCacheCopm] = useState([]);
  useEffect(() => {
    window.addEventListener("message", ({ data }) => {
      setCurrentCacheCopm(data);
    });
  });
  console.log(currentCacheCopm);
  return (
    <div>
      {setCurrentCacheCopm.length > 0 &&
        currentCacheCopm.map((comp) => {
          return <div key={id++}>{comp.description}</div>;
        })}
    </div>
  );
};

export default PreView;
