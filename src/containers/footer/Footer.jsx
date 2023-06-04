import React from 'react';
import './footer.css';
import havenlogo from '../../assets/havenlogo.png';
import appstore from '../../assets/GooglePlay.svg';
import playstore from '../../assets/AppStore.svg';

const Footer = () => {
  return (
    <div className='haven__footer'>
      <div className='haven__footer-container'>
        <div className='haven__footer-logoappstore'>
          <img src={havenlogo} alt="havenlogo" id='footer-havenlogo'/>
          <div className='haven__footer-appstores'>
            <img src={appstore} alt="appstore" id='appstoresvg'/>
            <img src={playstore} alt="playstore" id='playstoresvg'/>
          </div>
        </div>
        <div className='haven__footer-escrow'>
          <h6>Escrow</h6>
          <ul>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Dispute Resolution</a></li>
            <li><a href="#">API & Integration</a></li>
          </ul>
        </div>
        <div className='haven__footer-escrow'>
          <h6>Company</h6>
          <ul>
            <li><a href="/about">About us</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className='haven__footer-escrow'>
          <h6>Help</h6>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Chat</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        <div className='haven__footer-escrow'>
          <h6>Follow us</h6>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
        <div className='haven__footer-escrow'>
          <ul id='footer-location'>
            <li>Lagos, Nigeria</li>
            <li>info@paywithhaven.com</li>
            <li>01 88543213</li>
            <li>01 88765543</li>
          </ul>
        </div>
      </div>  
      <hr id='haven__footerline'/>
      <div className='footer-lastline'>
        <p>©️2023 PayHaven Technologies, all rights reserved.</p>
        <div className='footer-terms'>
          <a href="">Terms of Service</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </div>

  )
}

export default Footer
