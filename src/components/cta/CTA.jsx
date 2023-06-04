import React from 'react';
import { MdEast } from 'react-icons/md';
import './cta.css';
import AboutPhone from "../../assets/aboutphone.png"

const CTA = () => {
  return (
    <div className='haven__aboutPage'>  
      <div className='haven__aboutPage-hero'>
        <div className='haven__hero-text'>
          <h1 className='text-header'>About Haven</h1>
          <p className='hero-text-p'>We exist to eliminate the “what I ordered vs what I got” syndrome. <br/> 
          Now that we are here, we provide a reliable and trusted way to <br/> 
          protect your funds and assets during the transaction process.</p>
          <button type='hero-button' className='haven__aboutPage-hero-button'>
          <span className='button-text'>Get Started</span> 
          <span className='button-icon'><MdEast/></span> 
          </button>
        </div>
        <img src={AboutPhone} alt="haven phones" />
      </div>
      <div className='haven__aboutPage-oursolution'>
        <div className='haven__oursolution-container'>
          <h4>OUR SOLUTION</h4>
          <h1>Restoring Confidence in <br /> online transactions</h1>
          <p>Our platform offers a secure and reliable way to manage your <br /> transactions, with an added layer of protection that ensures any <br /> disputes are resolved quickly and fairly.</p>
          <p>Our dispute resolution feature allows buyers and sellers to submit <br /> disputes if there are any issues with the transaction, such as non- <br /> delivery of goods or services, or a dispute over the quality of the <br /> product. Haven is designed to provide you with peace of mind, <br /> knowing that your funds are secure and that any disputes that <br /> arise will be resolved quickly and fairly. </p>
          <p> In addition to our dispute resolution feature, our escrow <br /> application provides a simple and easy-to-use interface that allows <br /> you to create and manage your transactions quickly and easily. You <br /> can set the terms and conditions of the transaction, deposit funds, <br /> and track the progress of the transaction in real-time.</p>
          <p>We are committed to providing exceptional service and ensuring <br /> that all transactions are completed fairly and without any issues. <br /> Join our escrow application today and experience a secure, <br /> reliable, and hassle-free way to manage your transactions, with the <br /> added protection of our unique dispute resolution feature.</p>
        </div>
      </div>
    </div>
  )
}

export default CTA
