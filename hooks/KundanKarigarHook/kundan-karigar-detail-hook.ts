import GetSpecificPurchaseReceiptData from '@/services/api/PurchaseReceipt/get-specific-purchase-receipt-api';

import { get_access_token } from '@/store/slices/auth/login-slice';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReadyReceiptKarigar from '../readyReceiptKarigarHooks';
import UseCustomReceiptHook from '../custom-receipt-hook';
import {
  getSpecificReceipt,
  get_specific_receipt_data,
} from '@/store/PurchaseReceipt/getSpecificPurchaseReceipt-slice';

const UseKundanKarigarDetailHook = () => {
  const dispatch = useDispatch();
  const loginAcessToken = useSelector(get_access_token);
  const { query } = useRouter();
  const { tableData, recipitData, indexVal } = useReadyReceiptKarigar();
  const { defaultKarigarData, setDefaultKarigarData }: any =
    UseCustomReceiptHook();
  const [readOnlyFields, setReadOnlyFields] = useState<any>(false);

  console.log('default karigar data initially', defaultKarigarData);
  const SpecificDataFromStore: any = useSelector(get_specific_receipt_data);
  console.log('specific data', SpecificDataFromStore);

  console.log('query', query);


  useEffect(() => {
    console.log("kundan carigar detail hook")
    console.log("kundan carigar detail hook1", query)
    if (Object?.keys(query)?.length > 0) {
      const params: any = {
        token: loginAcessToken?.token,
        name: query?.receiptId,
      };
      dispatch(getSpecificReceipt(params));
    }
  }, [query]);

  useEffect(() => {
    if (SpecificDataFromStore?.data?.length > 0) {
      setDefaultKarigarData([...SpecificDataFromStore?.data]);
    } else {
      setDefaultKarigarData([]);
    }
  }, [SpecificDataFromStore]);

  useEffect(() => {
    if (SpecificDataFromStore?.docStatus > 0) {
      setReadOnlyFields(true);
    } else {
      setReadOnlyFields(false);
    }
  }, [SpecificDataFromStore]);


  console.log('default karigar data readonly', readOnlyFields);

  return { defaultKarigarData, readOnlyFields, setReadOnlyFields };
};

export default UseKundanKarigarDetailHook;
