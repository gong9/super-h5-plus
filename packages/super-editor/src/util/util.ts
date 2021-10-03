//@ts-nocheck

/** 防抖 */
export const debounce = (fn, wait = 20) => {
  let timeout = null;
  return (...args) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(args);
    }, wait);
  };
};

/** 16进制转rgba */
export const color2rgba = (color: string, opacity) => {
  return (
    'rgba(' +
    parseInt('0x' + color.slice(0, 2)) +
    ',' +
    parseInt('0x' + color.slice(2, 4)) +
    ',' +
    parseInt('0x' + color.slice(4)) +
    ',' +
    opacity +
    ')'
  );
};

/** rgba对象转rgba字符串 */
export const rgbaObj2string = (rgbaObj) => {
  return `rgba( 
    ${rgbaObj.r} ,${rgbaObj.g},${rgbaObj.b} ,${rgbaObj.a}
    )`;
};
