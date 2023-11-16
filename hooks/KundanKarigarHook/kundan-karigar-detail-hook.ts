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
  console.log('default karigar data initially', defaultKarigarData);
  const SpecificDataFromStore: any = useSelector(get_specific_receipt_data);
  console.log('specific data', SpecificDataFromStore);

  console.log('tabledata', tableData);


  useEffect(() => {
    console.log("kundan carigar detail hook")
    console.log("kundan carigar detail hook1", query)
    const params: any = {
      token: loginAcessToken?.token,
      name: query?.receiptId,
    };
    dispatch(getSpecificReceipt(params));
  }, []);

  useEffect(() => {
    if (SpecificDataFromStore?.data?.length > 0) {
      setDefaultKarigarData([...SpecificDataFromStore?.data]);
    } else {
      setDefaultKarigarData([]);
    }
  }, [SpecificDataFromStore]);

  // const DetailPageDataApi = async () => {
  //   if (Object?.keys(query)?.length > 0) {
  //     const params: any = {
  //       token: loginAcessToken?.token,
  //       name: query?.receiptId,
  //     };
  //     let detailPageApi: any = await getSpecificReceipt(params);
  //     console.log('detailpageapi', detailPageApi);
  //     if (
  //       detailPageApi?.status === 200 &&
  //       detailPageApi?.data?.message?.status === 'success'
  //     ) {
  //       setDefaultKarigarData([...detailPageApi?.data?.message?.data]);
  //     }
  //   }
  // };

  console.log('default karigar data', defaultKarigarData);

  return { defaultKarigarData };
};

export default UseKundanKarigarDetailHook;
