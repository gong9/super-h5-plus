//@ts-nocheck
class EventEmitter {
  constructor() {
    this.cache = {};
  }

  /**
   * 订阅
   * @param {string} eventname
   * @param {object} fn
   */
  on = (name, fn) => {
    this.cache[name] = fn;
  };

  /**
   * 发布
   * @param {string} eventname
   * @param  {...any} args
   */
  emit = (name, ...args) => {
    if (this.cache[name]) this.cache[name](...args);
  };

  /**
   * 
   * @param name 
   * @param fn 
   */
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
