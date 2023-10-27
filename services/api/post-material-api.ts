import axios from 'axios';
import { CONSTANTS } from '../config/api-config';

const postMaterialApi = async () => {
  let response: any;
  const config = {
    headers: {
      Accept: 'application/json',
    },
    withCredentials: true,
  };
  await axios
    .get(
      `${CONSTANTS.API_BASE_URL}api/method/sj_antique.sdk.api?version=v1&method=create_material&entity=material_post_api`,
      {
        ...config,
        timeout: 5000,
      }
    )
    .then((res: any) => {
      console.log('post material', res);
      response = res?.data?.message?.data;
    })
    .catch((err: any) => {
      if (err.code === 'ECONNABORTED') {
        response = 'Request timed out';
      } else if (err.code === 'ERR_BAD_REQUEST') {
        response = 'Bad Request';
      } else if (err.code === 'ERR_INVALID_URL') {
        response = 'Invalid URL';
      } else {
        response = err;
      }
    });

  return response;
};

export default postMaterialApi;
