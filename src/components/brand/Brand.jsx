import React from 'react';
import { MdEast } from "react-icons/md";
import './brand.css';
import Paylady from '../../assets/girl shopping online.png';
import Rider from '../../assets/delivery boy on scooter.png';
import Parcel from '../../assets/cardboard box and parcel.png';
import Safebox from '../../assets/safe with security shield.png';

//Everything tagged "Brand" speaks to the How it works section in the home page

const Brand = () => {
  return (
    <div className='haven__brand section__padding' id='howitworks'>
      <div className='haven__brand-text'>
        <h1 className='brand-header'>How it works</h1>
        <p className='brand-text'>Simply put, these 4 steps tells you <br/> how escrow works</p>
        <button type='brand-button' className='haven__brand-button'>
          <span className='button-text'>Get Started</span> 
          <span className='button-icon'><MdEast/></span> 
        </button>
      </div>
      <div className='haven__brand-step-containers'>
          <div className='box-row'>
            <div className='step-box'>
              <img src={Paylady} alt="lady shopping online" className='img-paylady'/>
              <h1>Shop online & Pay</h1>
              <p>Merchant or buyer can initiate the payment <br /> through haven escrow.</p>
            </div>
            <div className='step-box'> 
            <img src={Rider} alt="dispatch rider" className='img-rider' />
              <h1>Get the item delivered</h1>
              <p>Upon payment, seller sends the goods to <br /> the buyer through any courier of choice.</p>            
            </div>
          </div>
          <div className='box-row2'>
            <div className='step-box'> 
            <img src={Parcel} alt="parcel" className='img-parcel'/>
              <h1>Confirm Satisfaction</h1>
              <p>Upon payment, seller sends the goods to <br /> the buyer through any courier of choice.</p>            
            </div>
            <div className='step-box'> 
            <img src={Safebox} alt="safebox" className='img-safebox'/>
              <h1>Payment released</h1>
              <p>Upon payment, seller sends the goods to <br /> the buyer through any courier of choice.</p>  
            </div>
          </div>
      </div>
      {/* <button type='brand-button' className='haven__brand-button-mobile'>
          <span className='button-text'>Get Started</span> 
          <span className='button-icon'><MdEast/></span> 
      </button> */}
    </div>
  )
}

export default Brand
