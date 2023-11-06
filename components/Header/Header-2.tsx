import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/header.module.css';

const Header2 = ({ showButtons2 }: any) => {
  return (
    <div className='nav nav-pills d-flex '
        id="pills-tab"
        role="tablist"
    >
      <Link className="text-decoration-none nav-tabs tabs-container" href="/saleReturns">
        <button className=' nav-link border '
        id="pills-home-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-home"
        type="button"
        role="tab"
        aria-controls="pills-home"
        aria-selected="true"
        >
          Sale -Returns(Customer)
        </button>
      </Link>
      <Link className="text-decoration-none btn-margin nav-tabs tabs-container " href="/customerSale">
        <button className="nav-link border "
        id="pills-home-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-home"
        type="button"
        role="tab"
        aria-controls="pills-home"
        aria-selected="true"
        >
          Customer-Sale(Customer)
        </button>
      </Link>
    </div>
  );
};

export default Header2;
