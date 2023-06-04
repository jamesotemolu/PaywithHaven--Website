import React from 'react';
import './header.css';
import AppStore from '../../assets/AppStore.svg';
import PlayStore from '../../assets/GooglePlay.svg';
import HavenUI from '../../assets/Img.png';


const Header = () => {
  return (
    <div className='haven__header section__padding' id='home'>
      <div className='haven__header-content'>
        <h1 className='header__text'>Secure Your Transactions with Confidence</h1>
        <p>A secure and easy way to protect your online transactions. Whether you're buying or selling, we offer a  <br />
          trusted and reliable way to ensure that both parties are satisfied with the transaction</p>
        <div className='haven__header-appstore'>
          <img src={PlayStore} alt="Playstore" className='appstore' />
          <img src={AppStore} alt="Appstore" className='playstore' /> 
        </div>
        <div className='haven__header-havenui'>
          <img src={HavenUI} alt="havenui" />
        </div>
      </div>
      
    </div>
  )
}

export default Header
