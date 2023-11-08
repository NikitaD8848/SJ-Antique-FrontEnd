import UseKundanKarigarDetailHook from '@/hooks/KundanKarigarHook/kundan-karigar-hook';
import React from 'react';
import styles from '../../styles/readyReceipts.module.css';
import KundanTable from '../KundanReadyReceipts/KundanTable';
import KundanKarigarReadyReceiptMasterTable from '../KundanReadyReceipts/KundanKarigarReadyReceiptMasterTable';
import useReadyReceiptKarigar from '@/hooks/readyReceiptKarigarHooks';

const DetailPageReadyReceipt = () => {
  const { defaultKarigarData } = UseKundanKarigarDetailHook();
  const {
    setClick,
    kundanListing,
    handleCreate,
    handleRecipietChange,
    handleAddRow,
    karigarData,
    setRecipitData,
    handleFieldChange,
    tableData,
    handleDeleteRow,
    handleTabPress,
    setTableData,
    kundanKarigarData,
    handleModal,
    handleModalFieldChange,
    materialWeight,
    materialListData,
    calculateRowValue,
    handleDeleteChildTableRow,
    recipitData,
    setMaterialWeight,
    closeModal,
    handleSaveModal,
    showModal,
    lastPartOfURL,
    HandleDeleteReceipt,
  } = useReadyReceiptKarigar();
  console.log('default dataa', defaultKarigarData);
  return (
    <div className="container">
      <div>
        <div className={`${styles.button_field}`}>
          <button
            type="button"
            className={`${styles.create_button}`}
            onClick={handleCreate}
          >
            Create
          </button>
        </div>
        <div className=" table">
          <KundanTable
            handleRecipietChange={handleRecipietChange}
            recieptData={recipitData}
            karigarData={karigarData}
            setRecipitData={setRecipitData}
          />
        </div>
        <div className="container d-flex justify-content-end p-o">
          <button
            className="btn btn-link p-0"
            onClick={() => handleAddRow('tableRow')}
          >
            Add Row
          </button>
        </div>
        <div className="table">
          <KundanKarigarReadyReceiptMasterTable
            handleFieldChange={handleFieldChange}
            tableData={tableData}
            handleDeleteRow={handleDeleteRow}
            handleTabPress={handleTabPress}
            setTableData={setTableData}
            kundanKarigarData={kundanKarigarData}
            handleModal={handleModal}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailPageReadyReceipt;
