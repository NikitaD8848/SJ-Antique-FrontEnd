import { CONSTANTS } from '@/services/config/api-config';
import axios from 'axios';

const DeletePurchaseReceiptApi = async (token: any, name: any) => {
  let response: any;
  const version = 'v1';
  const method = 'delete_purchase_receipt_delete';
  const entity = 'delete_purchase_receipts';

  const params = `/api/method/sj_antique.sdk.api?version=${version}&method=${method}&entity=${entity}&name=${name}`;

  const config = {
    headers: {
      Authorization: token,
    },
  };

  await axios
    .delete(`${CONSTANTS.API_BASE_URL}${params}`, config)
    .then((res: any) => {
      response = res.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export default DeletePurchaseReceiptApi;
