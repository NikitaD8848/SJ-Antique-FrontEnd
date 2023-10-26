import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import styles from "../../styles/header.module.css";

const Header2 = ({ showButtons2 }: any) => {
  return (
    <div className="container-lg">
      <div className="navbar ">
        <div className={`${styles.nav}`}>
            {showButtons2 && (
              <div>
                <Link className="text-decoration-none" href="/saleReturns">
                  <button className={`${styles.button}`}>
                    <FontAwesomeIcon
                      className="p-1"
                      icon={faReceipt}
                      style={{ color: "#CDAB6E", fontSize: 20 }}
                    />
                    Sale -Returns(Customer)
                  </button>
                </Link>
                <Link className="text-decoration-none" href="/customerSale">
                  <button className={`${styles.button}`}>
                    <FontAwesomeIcon
                      className="p-1"
                      icon={faReceipt}
                      style={{ color: "#CDAB6E", fontSize: 20 }}
                    />
                    Customer-Sale(Customer)
                  </button>
                </Link>
              </div>
            )}
            
        </div>
      </div>
    </div>
  );
};

export default Header2;
