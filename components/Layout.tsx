import React from 'react'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'

const Layout = ({children}: any) => {
  return (
    <>
        <Navbar/>
        <Header/>
        {children}
        
    </>
  )
}

export default Layout