import React from 'react';
import styles from '../../styles/readyReceipts.module.css';
import UseCustomReceiptHook from '@/hooks/custom-receipt-hook';
const DocStatusButtonChanges = ({
  data,
  stateForDocStatus,
  handleUpdateReceipt,
}: any) => {
  console.log('button changes data', data);

  const { HandleUpdateDocStatus }: any = UseCustomReceiptHook();
  return (
    <div>
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
            // onClick={() => HandleUpdateDocStatus('1')}
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default DocStatusButtonChanges;
