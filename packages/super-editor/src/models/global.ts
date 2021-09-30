//@ts-nocheck
export const DemoModel = {
  nameSpace: 'global',
  state: {
    currentCacheCopm: [],
  },
  reducers: {
    updataCurrentCacheCopm(state, { payload }) {
      return {
        currentCacheCopm: [...state, payload],
      };
    },
  },
  effects: {},
  subscriptions: {
    setup({ dispatch, history }) {},
  },
};
