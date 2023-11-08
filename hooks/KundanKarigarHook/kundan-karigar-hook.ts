import {
  getSpecificReceipt,
  get_specific_receipt_data,
} from '@/store/PurchaseReceipt/getSpecificPurchaseReceipt-slice';
import { get_access_token } from '@/store/slices/auth/login-slice';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UseKundanKarigarHook = () => {
  const loginAcessToken = useSelector(get_access_token);

  const { query } = useRouter();
  const dispatch = useDispatch();
  console.log('routerr detaaaa', query);

  const specificReceiptDataFromStore: any = useSelector(
    get_specific_receipt_data
  );
  console.log('specificReceiptData', specificReceiptDataFromStore);

  const [defaultKarigarData, setDefaultKarigarData] = useState<any>([]);

  useEffect(() => {
    console.log('routerr detaaaa idd', query);
    const params: any = {
      token: loginAcessToken?.token,
      name: query?.receiptId,
    };
    dispatch(getSpecificReceipt(params));
  }, [query]);

  return { defaultKarigarData };
};

export default UseKundanKarigarHook;
