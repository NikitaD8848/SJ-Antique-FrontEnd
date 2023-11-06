import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../styles/header.module.css';
import Link from 'next/link';
import SalesHeader from './SalesHeader';
const ReceiptsHeader = () => {
  const [showReceipt, setShowReceipts] = useState(false);
  const [showSales, setShowSales] = useState(false);
  const [showMaster, setShowMaster] = useState(false);
  useEffect(() => {
    setShowReceipts(true);
  }, []);

  const handleReadyRecipt = (val: any) => {
    switch (val) {
      case 'Receipts':
        setShowReceipts(!showReceipt);
        setShowSales(false);
        setShowMaster(false);
        break;
      case 'Sales':
        setShowSales(!showSales);
        setShowReceipts(false);
        setShowMaster(false);
        break;
      case 'Master':
        setShowMaster(!showMaster);
        setShowReceipts(false);
        setShowSales(false);
        break;
      default:
        setShowReceipts(!showReceipt);
        setShowSales(false);
        setShowMaster(false);
    }
  };

  return (
    <>
      <div className={styles.button_container}>
        <Link className="text-decoration-none btn-margin" href="/master">
          <button
            className={`${styles.button}`}
            onClick={() => handleReadyRecipt('Master')}
          >
            <i
              className="fa-regular fa-file icons-color mr-2"
              style={{ color: '#CDAB6E', fontSize: 20, marginRight: '9px' }}
            ></i>
            Master
          </button>
        </Link>
        <Link
          className="text-decoration-none btn-margin"
          href="/readyReceipt/mangalsutra"
        >
          <button
            className={`${styles.button}`}
            onClick={() => handleReadyRecipt('Receipts')}
          >
            <i
              className="fa-regular fa-file icons-color mr-2"
              style={{ color: '#CDAB6E', fontSize: 20, marginRight: '9px' }}
            ></i>
            Ready Receipts
          </button>
        </Link>
        <Link className="text-decoration-none btn-margin" href="/sales">
          <button
            className={`${styles.button}`}
            onClick={() => handleReadyRecipt('Sales')}
          >
            <i
              className="fa-regular fa-file icons-color mr-2"
              style={{ color: '#CDAB6E', fontSize: 20, marginRight: '9px' }}
            ></i>
            Sales
          </button>
        </Link>
      </div>
      <div className=" justify-content-center">
        <div className="navbar d-flex justify-content-center">
          <div >
            {showReceipt ? (
              <div className='nav nav-pills d-flex'
              id="pills-tab"
              role="tablist">
                <Link
                  className="text-decoration-none nav-tabs tabs-container"
                  href="/readyReceipt/kundan"
                >
                  <button className='nav-link border'
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true">
                    Ready Receipts(Kundan Karigar)
                  </button>
                </Link>
                <Link
                  className="text-decoration-none nav-tabs tabs-container"
                  href="/readyReceipt/mangalsutra"
                >
                  <button className='nav-link border'
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true">
                    Ready Receipts(Mangalsutra Karigar)
                  </button>
                </Link>
              </div>
            ) : (
              ''
            )}
            {showSales ? <SalesHeader /> : ''}
            {showMaster ? '' : ''}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceiptsHeader;
