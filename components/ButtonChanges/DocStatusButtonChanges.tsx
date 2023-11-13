import React, { useEffect } from 'react';
import styles from '../../styles/readyReceipts.module.css';
import UseCustomReceiptHook from '@/hooks/custom-receipt-hook';
import { get_specific_receipt_data } from '@/store/PurchaseReceipt/getSpecificPurchaseReceipt-slice';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
const DocStatusButtonChanges = ({
  data,
  stateForDocStatus,
  handleUpdateReceipt,
  setReadOnlyFields,
}: any) => {
  console.log('button changes data', data);
  const { query } = useRouter();
  const router = useRouter();
  console.log('queer', query);
  const specificDataFromStore: any = useSelector(get_specific_receipt_data);
  console.log('SpecificDataFromStore in bu', specificDataFromStore);
  useEffect(() => {
    if (Object?.keys(specificDataFromStore)?.length > 0) {
      setReadOnlyFields(specificDataFromStore?.docstatus);
    }
  }, [setReadOnlyFields, specificDataFromStore]);
  const {
    HandleUpdateDocStatus,
    HandleDeleteReceipt,
    HandleAmendBtnForEdit,
  }: any = UseCustomReceiptHook();
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="">
        <button
          type="button"
          className={`${styles.create_button}`}
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
      <div className={`${styles.button_field}`}>
        {data?.docstatus === 0 && stateForDocStatus && (
          <button
            type="button"
            className={`${styles.create_button}`}
            onClick={handleUpdateReceipt}
          >
            Save
          </button>
        )}
        {data?.docstatus === 0 && stateForDocStatus === false && (
          <button
            type="button"
            className={`${styles.create_button}`}
            onClick={() => HandleUpdateDocStatus('1')}
          >
            Submit
          </button>
        )}
        {data?.docstatus === 1 && stateForDocStatus === false && (
          <button
            type="button"
            className={`${styles.create_button}`}
            onClick={() => HandleUpdateDocStatus('2')}
          >
            Cancel
          </button>
        )}
        {data?.docstatus === 2 && stateForDocStatus === false && (
          <button
            type="button"
            className={`${styles.create_button} me-2`}
            onClick={() => HandleAmendBtnForEdit}
          >
            Amend
          </button>
        )}
        {data?.docstatus === 2 && stateForDocStatus === false && (
          <button
            type="button"
            className={`${styles.create_button}`}
            onClick={() => HandleDeleteReceipt(query?.receiptId)}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default DocStatusButtonChanges;
