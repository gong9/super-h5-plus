//@ts-nocheck

/**
 * 防抖
 */
export const debounce = (fn, wait = 20) => {
  let timeout = null;
  return (...args) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(args);
    }, wait);
  };
};
