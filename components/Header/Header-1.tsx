import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../styles/header.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import Header2 from './Header-2';
const Header1 = () => {
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
        <button
          className={`${styles.button}`}
          onClick={() => handleReadyRecipt('Master')}
        >
          <FontAwesomeIcon
            className="p-1 "
            icon={faReceipt}
            style={{ color: '#CDAB6E', fontSize: 20 }}
          />
          <span className='pt-1'>Master</span>
        </button>
        <button
          className={`${styles.button}`}
          onClick={() => handleReadyRecipt('Receipts')}
        >
          <FontAwesomeIcon
            className="p-1"
            icon={faReceipt}
            style={{ color: '#CDAB6E', fontSize: 20 }}
          />
          <span className="pt-1">Ready Receipts</span>
        </button>
        <button
          className={`${styles.button}`}
          onClick={() => handleReadyRecipt('Sales')}
        >
          <FontAwesomeIcon
            className="p-1"
            icon={faReceipt}
            style={{ color: '#CDAB6E', fontSize: 20 }}
          />
          <span className="pt-1">Sales</span>
        </button>
      </div>
      <div className="container-lg justify-content-center">
        <div className="navbar ">
          <div className={`${styles.nav}`}>
            {showReceipt ? (
              <div>
                <Link
                  className="text-decoration-none btn-margin"
                  href="/readyReceiptKundanKarigar"
                >
                  <button className={` btn btn-outline-primary`}>
                    Ready Receipts(Kundan Karigar)
                  </button>
                </Link>
                <Link
                  className="text-decoration-none btn-margin"
                  href="/readyReceiptsMangalsutra"
                >
                  <button className={` btn btn-outline-primary`}>
                    Ready Receipts(Mangalsutra Karigar)
                  </button>
                </Link>
              </div>
            ) : (
              ''
            )}
            {showSales ? <Header2 /> : ''}
            {showMaster ? <p>Master Loading</p> : ''}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header1;
