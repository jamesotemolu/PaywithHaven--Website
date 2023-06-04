import React from 'react'

import { Footer, Features, WhatHaven, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

// Note that Contact = Possibility

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />      {/* This is the hero section */}
      </div>
      <Brand />         {/* This is the how it works section */}
      <WhatHaven />     {/* This is the "Bid FoOT Bye" section */}
      <Features />      {/* This is the Coming soon part */}
      <Footer />
    </div>
  )
}

export default App
