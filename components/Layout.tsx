import React from 'react';
import Header from './Header/ReceiptsHeader';
import Navbar from './Navbar/Navbar';
import { useRouter } from 'next/router';

const Layout = ({ children }: any) => {
  const router = useRouter();

  return (
    <>
      {router.pathname === '/' ? '' : <Navbar />}
      {children}
    </>
  );
};

export default Layout;
