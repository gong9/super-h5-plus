import request from './service';
import apiServeUrl from './config';

/**
 * 保存schema
 * @param params 
 * @returns 
 */
export const saveSchema = (params = {}) => {
  const url = apiServeUrl.qa.concat('/schema/save');
  return request.post(url, { params });
};

/**
 * 下载schema
 * @returns 
 */
export const downloadSchema = () => {
  const url = apiServeUrl.qa.concat('/schema/download');
  return request.get(url);
};
