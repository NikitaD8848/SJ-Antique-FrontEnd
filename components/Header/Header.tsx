import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../../styles/header.module.css'
import page1 from '@/pages/page1'
import Link from 'next/link'


const Header = () => {

    return (
        <div className='container'>
            <div className={`${styles.header}`}>
                <nav className={`${styles.nav}`}>

                    <button className={`${styles.btn}`} >
                        Ready Receipts(Kundan Karigar)
                        <Link href='page1'></Link>
                    </button>

                    <button className={`${styles.btn}`}>
                        <Link href="/page2"></Link>
                        Ready Receipts(Mangalsutra Karigar)
                    </button>
                    <button className={`${styles.btn}`}>
                        <Link href="page3"></Link>
                        Sale -Returns(costomer)
                    </button>
                    <button className={`${styles.btn}`}><a href="page4"></a>Customer-Sale(customer)</button>
                </nav>
            </div>
        </div>
    )
}

export default Header