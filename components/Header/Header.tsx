import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../../styles/header.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="container-lg">
      <div className="navbar navbar-lightt ">
        <div className={`${styles.nav}`}>
          <Link href="/readyReceiptKundanKarigar">
            <button className={`${styles.button}`}>
            <FontAwesomeIcon
              className="p-1"
              icon={faReceipt}
              style={{ color: "gold", fontSize: 20 }}
            />
              Ready Receipts(Kundan Karigar)
            </button>
          </Link>
          <Link href="/readyReceiptsMangalsutra">
            <button className={`${styles.button}`}>
            <FontAwesomeIcon
              className="p-1"
              icon={faReceipt}
              style={{ color: "gold", fontSize: 20 }}
            />
              Ready Receipts(Mangalsutra Karigar)
            </button>
          </Link>
          <Link href="/saleReturns">
            <button className={`${styles.button}`}>
            <FontAwesomeIcon
              className="p-1"
              icon={faReceipt}
              style={{ color: "gold", fontSize: 20 }}
            />
              Sale -Returns(Customer)
            </button>
          </Link>
          <Link href="/customerSale">
            <button className={`${styles.button}`}>
            <FontAwesomeIcon
              className="p-1"
              icon={faReceipt}
              style={{ color: "gold", fontSize: 20 }}
            />
              Customer-Sale(Customer)
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
