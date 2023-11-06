import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/readyReceipts.module.css';
import { Modal, Button } from 'react-bootstrap';
import KundanListing from './KundanReadyReceiptsListing';
import ModalMaster from '../ModalMaster/ModalMaster';
import KundanKarigarReadyReceiptMasterTable from './KundanKarigarReadyReceiptMasterTable';
import KundanTable from './KundanTable';
import useReadyReceiptKarigar from '@/hooks/readyReceiptKarigarHooks';

const ReadyReceiptKundanKarigarMaster = () => {
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
  } = useReadyReceiptKarigar();
  return (
    <div className="container-lg">
      <div>
        <div
          className="nav nav-pills mb-2 justify-content-center "
          id="pills-tab"
          role="tablist"
        >
          <div className="nav-tabs tabs-container w-50 " role="presentation">
            <button
              className="nav-link active w-100 p-1 border"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
              onClick={() => setClick(true)}
            >
              Ready receipts {lastPartOfURL} karigar
            </button>
          </div>
          <div className="nav-tabs tabs-container w-50" role="presentation">
            <button
              className="nav-link  w-100 p-1 border"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Create new ready receipt
            </button>
          </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <KundanListing kundanListing={kundanListing} />
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
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
              <div className=" table-responsive">
                <KundanTable
                  handleRecipietChange={handleRecipietChange}
                  recipitData={recipitData}
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
              <div className="table-responsive">
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
        </div>
      </div>
      <div>
        {tableData.map((item: any, index: any) => (
          <Modal size="xl" show={showModal} onHide={closeModal} key={index}>
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Triggered by Key Press
              </Modal.Title>
            </Modal.Header>
            <ModalMaster
              handleModalFieldChange={handleModalFieldChange}
              handleAddRow={handleAddRow}
              materialWeight={materialWeight}
              setMaterialWeight={setMaterialWeight}
              materialListData={materialListData}
              calculateRowValue={calculateRowValue}
              handleDeleteChildTableRow={handleDeleteChildTableRow}
              setRecipitData={setRecipitData}
              recipitData={recipitData}
              />
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
              <Button
                variant="secondary"
                onClick={() => handleSaveModal(item.id)}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        ))}
      </div>
    </div>
  );
};

export default ReadyReceiptKundanKarigarMaster;
