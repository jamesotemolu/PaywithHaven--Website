import React from 'react';
import { MdEast } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdOutlineStar } from 'react-icons/md';
import { MdOutlineStarHalf } from 'react-icons/md';
import { MdOutlineStarOutline } from 'react-icons/md';
import './cta.css';
import AboutPhone from "../../assets/aboutphone.png";
import ProfileAvi from "../../assets/profile-avi.png";


const Testimonials = () => (
  <>
          <div className='testimonial-box'>
              <p>"Using an escrow service gave me the peace of mind I needed when purchasing a high-value item online. 
                  It was a simple and secure way to ensure that I wasn't scammed, and the transaction was completed without any issues. I highly recommend using an escrow service for any online purchases."</p>
              <div className='testifier_details'>
                <img src={ProfileAvi} alt="haven__avi" />
                <div className='testifier_name'>
                  <h6>Ahmed Richab</h6>
                  <div><MdOutlineStar color='#FABF01'/><MdOutlineStar color='#FABF01'/><MdOutlineStar color='#FABF01'/><MdOutlineStarHalf color='#FABF01'/><MdOutlineStarOutline color='d8d8d8'/></div>
                </div>
              </div>
          </div>
  </>
)

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
      <div className='haven__aboutPage-testimonials'>
        <div className='testimonials-col1'>
          <h1 className='text-header'>Testimonials</h1>
          <p className='testimonial-text'>Read what people are saying about us.</p>
          <div className='testimonial-buttons-grp'>
            <button className='testimonial-button'><MdKeyboardArrowLeft size="24px" color='#0D334D'/></button>
            <button className='testimonial-button'><MdKeyboardArrowRight size="24px" color='#0D334D'/></button>
          </div>
        </div>
        <div className='testimonials-col2'>
            <Testimonials/>
            <Testimonials/>
            <Testimonials/>
            <Testimonials/>
        </div>
      </div>
    </div>
  )
}

export default CTA
