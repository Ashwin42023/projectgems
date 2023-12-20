import React from 'react'
import Header from './header';
import Footer from './footer';

function LayoutPage({children}) {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default LayoutPage;