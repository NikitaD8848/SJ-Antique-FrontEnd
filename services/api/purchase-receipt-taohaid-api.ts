import axios from "axios";
import { CONSTANTS } from "../config/api-config";

const purchasreceiptTaohaidApi = async (get_access_token:any) => {
    let response: any;
    const config = {
        headers: {
          Accept: "application/json",
          Authorization: get_access_token
        }
    }
    await axios
      .get(
        `${CONSTANTS.API_BASE_URL}api/method/sj_antique.sdk.api?version=v1&method=create_purchase_receipt&entity=purchase_receipt`,
        {
            ...config,
            timeout:5000,
        }
      )
      .then((res: any) => {
        console.log("purchase receipt taohaid", res);
        response = res?.data?.message?.data;
      })
      .catch((err: any) => {
        if (err.code === "ECONNABORTED") {
          response = "Request timed out";
        } else if (err.code === "ERR_BAD_REQUEST") {
          response = "Bad Request";
        } else if (err.code === "ERR_INVALID_URL") {
          response = "Invalid URL";
        } else {
          response = err;
        }
      });
  
    return response;
  };
  
  export default purchasreceiptTaohaidApi;
  