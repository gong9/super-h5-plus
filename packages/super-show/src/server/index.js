import request from './service';
import apiServeUrl from './config';

export const getSchema = () => {
  const url = apiServeUrl.qa.concat('/schema/getSchema');
  return request.get(url);
};