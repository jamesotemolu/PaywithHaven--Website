import React from 'react'
import { Footer } from '../containers';
import { CTA, Brand, Navbar } from '../components';
import './aboutPage.css';

const AboutPage = () => {
    return (
      <div className='aboutPage'>
        <div className='haven__aboutPage-navbar'>
          <Navbar />
          <CTA />  {/* This is the about page*/}
        </div>

        <Footer />
      </div>
    )
  }
  
  export default AboutPage