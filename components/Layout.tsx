import React from 'react';
import Header from './Header/Header-1';
import Navbar from './Navbar/Navbar';
import { useRouter } from 'next/router';

const Layout = ({ children }: any) => {
  const router = useRouter();
  console.log(router, 'router');
  return (
    <>
      {router.pathname === '/' ? '' : <Navbar />}
      {children}
    </>
  );
};

export default Layout;
