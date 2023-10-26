import React from 'react'
import Header from './Header/Header-1'
import Navbar from './Navbar/Navbar'

const Layout = ({children}: any) => {
  return (
    <>
        <Navbar/>
        {children}
        
    </>
  )
}

export default Layout