import axios from "axios";
import { CONSTANTS } from "../config/api-config";

const getAccessTokenApi = async () => {
    let response: any;
    await axios
      .get(
        `${CONSTANTS.API_BASE_URL}api/method/sj_antique.sdk.api?version=v1&method=get_access_token&entity=access_token&usr=Administrator&pwd=Erp@123`
      )
      .then((res: any) => {
        console.log("Access token", res);
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
  
  export default getAccessTokenApi;
  