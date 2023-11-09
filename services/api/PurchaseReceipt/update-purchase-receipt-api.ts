import { CONSTANTS, headerGenerator } from '@/services/config/api-config';
import axios from 'axios';

const UpdatePurchaseReceiptApi = async (token: any, val: any, name: any) => {
  console.log(val, 'vals');

  let response: any;
  const getHeaders = headerGenerator(token);

  await axios
    .put(
      `${CONSTANTS.API_BASE_URL}/api/resource/Purchase Receipt/${name}`,
      val,
      getHeaders
    )
    .then((res: any) => {
      console.log('post purchase receipt', res);
      response = res;
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

export default UpdatePurchaseReceiptApi;
