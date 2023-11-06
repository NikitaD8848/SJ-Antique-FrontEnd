import axios from 'axios';
import { CONSTANTS, headerGenerator } from '../config/api-config';

const getPurchasreceiptListApi = async (get_access_token: any, val: string) => {
  let response: any;
  const getHeaders = headerGenerator(get_access_token?.token);
  const params = `version=v1&method=get_specific_purchase_receipt&entity=specific_purchase_receipt&custom_ready_receipt_type=${val}`;
  await axios
    .get(
      `${CONSTANTS.API_BASE_URL}/api/method/sj_antique.sdk.api?version=v1&method=get_specific_purchase_receipt&entity=specific_purchase_receipt&custom_ready_receipt_type=Mangalsutra`,
      getHeaders
    )
    .then((res: any) => {
      response = res?.data?.message?.data;
      console.log('purchase receipt response', response);
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

export default getPurchasreceiptListApi;
