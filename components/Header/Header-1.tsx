import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../../styles/header.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
const Header1 = ({ showButtons1 }: any) => {
  return (
    <div className="container-lg">
      <div className="navbar ">
        <div className={`${styles.nav}`}>
          
            {showButtons1 && (
              <div>
                <Link
                  className="text-decoration-none"
                  href="/readyReceiptKundanKarigar"
                >
                  <button className={`${styles.button}`}>
                    <FontAwesomeIcon
                      className="p-1"
                      icon={faReceipt}
                      style={{ color: "#CDAB6E", fontSize: 20 }}
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
                      style={{ color: "#CDAB6E", fontSize: 20 }}
                    />
                    Ready Receipts(Mangalsutra Karigar)
                  </button>
                </Link>
              </div>
            )}
            </div>
      </div>
    </div>
  );
};

export default Header1;
