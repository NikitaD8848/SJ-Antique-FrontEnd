import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../styles/header.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';
const Header1 = () => {
  return (
    <div className="container-lg justify-content-center">
      <div className="navbar ">
        <div className={`${styles.nav}`}>
          <div>
            <Link
              className="text-decoration-none"
              href="/readyReceiptKundanKarigar"
            >
              <button className={`${styles.button}`}>
                <FontAwesomeIcon
                  className="p-1"
                  icon={faReceipt}
                  style={{ color: '#CDAB6E', fontSize: 20 }}
                />
                Ready Receipts(Kundan Karigar)
              </button>
            </Link>
            <Link
              className="text-decoration-none"
              href="/readyReceiptsMangalsutra"
            >
              <button className={`${styles.button}`}>
                <FontAwesomeIcon
                  className="p-1"
                  icon={faReceipt}
                  style={{ color: '#CDAB6E', fontSize: 20 }}
                />
                Ready Receipts(Mangalsutra Karigar)
              </button>
            </Link>
            <Link className="text-decoration-none" href="/saleReturns">
              <button className={`${styles.button}`}>
                <FontAwesomeIcon
                  className="p-1"
                  icon={faReceipt}
                  style={{ color: '#CDAB6E', fontSize: 20 }}
                />
                Sale -Returns(Customer)
              </button>
            </Link>
            <Link className="text-decoration-none" href="/customerSale">
              <button className={`${styles.button}`}>
                <FontAwesomeIcon
                  className="p-1"
                  icon={faReceipt}
                  style={{ color: '#CDAB6E', fontSize: 20 }}
                />
                Customer-Sale(Customer)
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
