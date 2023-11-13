import Link from 'next/link';
import styles from '../../styles/header.module.css';
const MasterListing :any= ({value}:any) => {

  return (
    <>
      <div className="container-lg ">
      
        <div className={`${styles.button_container}`}>
          <Link href="/master/karigar"
          className="text-decoration-none btn-margin" >
            <button
              className={`${styles.button} ${value==='karigar' ? 'activeColor':''}`}
            >
              Karigar
            </button>
          </Link>
          <Link
            href="/master/kundanKarigar"
          >
            <button
              className={`${styles.button} ${value==='kundanKarigar' ? 'activeColor':''}`}
            >
              Kundan Karigar
            </button>
          </Link>
          <Link href="/master/material">
            <button
              className={`${styles.button} ${value === 'material' ? 'activeColor':''}`}
            >
              Material
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MasterListing;
