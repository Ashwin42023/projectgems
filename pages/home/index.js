import LandingPage from '@/component/landingPage'
import LayoutPage from '@/component/layout';
import React from 'react'

function Home() {
  return (
    <LandingPage/>)
}
  
Home.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Home;