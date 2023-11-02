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
        <Link className="text-decoration-none btn-margin" href="/readyReceipt">
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
      <div className="container-lg justify-content-center">
        <div className="navbar ">
          <div className={`${styles.nav}`}>
            {showReceipt ? (
              <div>
                <Link
                  className="text-decoration-none btn-margin"
                  href="/readyReceiptKundanKarigar"
                >
                  <button className={`text-dark btn btn-outline-primary`}>
                    Ready Receipts(Kundan Karigar)
                  </button>
                </Link>
                <Link
                  className="text-decoration-none btn-margin"
                  href="/readyReceiptsMangalsutra"
                >
                  <button className={`text-dark btn btn-outline-primary`}>
                    Ready Receipts(Mangalsutra Karigar)
                  </button>
                </Link>
              </div>
            ) : (
              ''
            )}
            {showSales ? <Header2 /> : ''}
            {showMaster ? '' : ''}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header1;
