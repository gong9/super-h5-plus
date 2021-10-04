import axios from 'axios';
import qs from 'qs';

// todo 关于axios的异常处理  绝大部分的异常处理处理都是相同的故写一个兜底即可

/**
 * 创建axios实例
 */
const request = axios.create({
  timeout: 16000, // 默认超时16秒
  withCredentials: false, // 是否携带cookie
  responseType: 'json',
  paramsSerializer: (params) => qs.stringify(params, {
    arrayFormat: 'repeat'
  }),
});

/**
 * 请求拦截器
 */
request.interceptors.request.use(
  async (config) => {
      // set token
      // if (!config.headers['user-token']) {}

      return config;
    },
    (error) => Promise.reject(error),
);

/**
 * 响应拦截器
 */
request.interceptors.response.use(
  (response) => {
    const config = response.config;
    let data = response.data;
    /** 如果不是json格式, 不处理 */
    if (config.responseType !== 'json') {
      return Promise.resolve(data);
    }

    if (data && data?.message === 'success') {
      return Promise.resolve(data?.data);
    }

    return Promise.reject(data);
  },
  (error) => Promise.reject(error),
);

export default request;