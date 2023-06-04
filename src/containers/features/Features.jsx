import React from 'react';
import { MdEast } from "react-icons/md";
import './features.css';
import cardimage from '../../assets/Card-frame.png'

const Features = () => {
  return (
    <div className='haven__contactless'>
      <img src={cardimage} alt="haven card" />
      <div className='haven__comingsoontexts'>
        <div className='haven__comingsoon'>Coming soon!</div>
        <h1>Go Contactless with Haven</h1>
        <p>
          With contactless payment becoming more popular, you can now leave your <br /> 
          wallet at home and use your phone instead. Our contactless payment feature <br /> 
          allows you to securely pay for goods and services using your smartphone, <br /> 
          without the need for physical cards or cash. Using your phone for contactless <br /> 
          payments is not only convenient, but also more secure than carrying a physical <br /> 
          card. 
        </p>
        <button type='Features-button'>
          <span className='button-text'>Learn more</span> 
          <span className='button-icon'><MdEast/></span> 
        </button>
      </div>
    </div>
  )
}

export default Features
