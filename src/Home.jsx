import React from 'react';

import Header from './container/Header/Header';
import About from './container/About/About';
import Work from './container/Work/Work';
import Navbar from './components/Navbar';


const Home = () => {
  return (
    <div>
        <Navbar/>
      <Header />
      <About />
      <Work />
    </div>
  )
}

export default Home