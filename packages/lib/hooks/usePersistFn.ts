import { useRef } from 'react';

/**
 * 暂时替代usecallback
 */

const usePersistFn = (fn: Function) => {
  const fnRef = useRef<any>();
  if (!fnRef.current) {
    fnRef.current = {
      persistFn: (...args: any) => fnRef.current.fn(...args),
    };
  }
  fnRef.current.fn = fn;
  return fnRef.current.persistFn;
};

export default usePersistFn;
