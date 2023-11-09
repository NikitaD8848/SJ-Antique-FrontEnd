import GetSpecificPurchaseReceiptData from '@/services/api/PurchaseReceipt/get-specific-purchase-receipt-api';

import { get_access_token } from '@/store/slices/auth/login-slice';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useReadyReceiptKarigar from '../readyReceiptKarigarHooks';

const UseKundanKarigarDetailHook = () => {
  const loginAcessToken = useSelector(get_access_token);
  const { query } = useRouter();

  const [defaultKarigarData, setDefaultKarigarData] = useState<any>([]);

  useEffect(() => {
    DetailPageDataApi();
  }, [query]);

  const DetailPageDataApi = async () => {
    if (Object?.keys(query)?.length > 0) {
      const params: any = {
        token: loginAcessToken?.token,
        name: query?.receiptId,
      };
      let detailPageApi: any = await GetSpecificPurchaseReceiptData(params);
      console.log('detailpageapi', detailPageApi);
      if (
        detailPageApi?.status === 200 &&
        detailPageApi?.data?.message?.status === 'success'
      ) {
        setDefaultKarigarData([...detailPageApi?.data?.message?.data?.data]);
      }
    }
  };

  console.log('default karigar data', defaultKarigarData);

  return { defaultKarigarData };
};

export default UseKundanKarigarDetailHook;
