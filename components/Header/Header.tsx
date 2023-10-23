import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../../styles/header.module.css'
import Link from 'next/link'
const Header = () => {

    return (
        <div className='navbar navbar-light bg-light mx-5'>
            <div className='container-lg py-3'>
                <div className={`${styles.nav}`} >
                    <Link href='/readyReceiptKundanKarigar'>
                        <button className={`${styles.button}`}>
                            Ready Receipts(Kundan Karigar)
                        </button>
                    </Link>
                    <Link href='/readyReceiptsMangalsutra'>
                        <button className={`${styles.button}`}>
                            Ready Receipts(Mangalsutra Karigar)
                        </button>
                    </Link>
                    <Link href='/saleReturns'>
                        <button className={`${styles.button}`}>
                            Sale -Returns(costomer)
                        </button>
                    </Link>
                    <Link href='/customerSale'>
                        <button className={`${styles.button}`}>
                            Customer-Sale(customer)
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header