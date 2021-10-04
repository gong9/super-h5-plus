import request from './service';
import apiServeUrl from './config';

/**
 * 关于接口为啥需要函数包裹一层
 *  因为结合函数的入参和ts在团队协作开发时可以很清晰的知晓接口的参数
 */

export const getSchema = () => {
  const url = apiServeUrl.qa.concat('/schema/getSchema');
  return request.get(url);
};