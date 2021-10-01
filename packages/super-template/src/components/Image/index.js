import React from "react";
import schema from "./schema";
import './index.less'

const Image = () => {
  return (
    <div className='super-image'>
      <img src="https://img11.360buyimg.com/ddimg/jfs/t1/88856/35/18313/1750299/6156d725E08d3adea/c3a6bd820350230c.png"></img>
    </div>
  );
};

Image.schema = schema;
export default Image;
