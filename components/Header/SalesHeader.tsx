import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Link from 'next/link';
import styles from '../../styles/header.module.css';

const SalesHeader = ({ showButtons2 }: any) => {
  return (
    <div>
      <Link className="text-decoration-none btn-margin" href="/saleReturns">
        <button className={`btn btn-outline-primary`}>
          Sale -Returns(Customer)
        </button>
      </Link>
      <Link className="text-decoration-none btn-margin " href="/customerSale">
        <button className={` btn btn-outline-primary`}>
          Customer-Sale(Customer)
        </button>
      </Link>
    </div>
  );
};

export default SalesHeader;
