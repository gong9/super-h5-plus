//@ts-nocheck
/**
 * 事件总线
 * 利用发布订阅处理非关联组件之间通信问题
 */

class EventEmitter {
  constructor() {
    this.cache = {};
  }

  /**
   * 订阅
   * @param {*} eventname
   * @param {*} fn
   */
  on = (name, fn) => {
    this.cache[name] = fn;
  };

  /**
   * 发布
   * @param {*} eventname
   * @param  {...any} args
   */
  emit = (name, ...args) => {
    if (this.cache[name]) this.cache[name](...args);
  };

  off = (name, fn) => {
    let tasks = this.cache[name];
    if (tasks) {
      const index = tasks.findIndex((f) => f === fn || f.callback === fn);
      if (index >= 0) {
        tasks.splice(index, 1);
      }
    }
  };
}

export default new EventEmitter();
