import React from 'react'
import Header from './Header/Header'
import Navbar from './Navbar/NavBar'

const Layout = ({children}: any) => {
  return (
    <>
        <Navbar/>
        {children}
        <Header/>
    </>
  )
}

export default Layout