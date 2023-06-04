import React, { useState } from 'react';
import { MdOpenInNew, MdMenu, MdClear } from "react-icons/md";
import './navbar.css';
import logo from '../../assets/havenlogo.png';
import aboutPage from '../../pages/aboutPage';

const Menu = () => (
  <>
              <p><a href="/about">About us</a></p>
              <p><a href="#features">Testimonials</a></p>
              <p><a href="#contact">Contact us</a></p>
              <p><a href="#blog">FAQs</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='haven__navbar'>
      <div className='haven__navbar-links'>
        <div className='haven__navbar-links_logo'>
          <a href="/"><img src={logo} alt="logo" /></a>
        </div>
        <div className='haven__navbar-links_container'>
            <Menu />
            <div className='haven__navbar-download'>
            <button type='button'>
            <MdOpenInNew/> 
            <span> Download App </span>
            </button>
            </div>
        </div>
      </div>

      <div className='haven__navbar-menu'>
          {toggleMenu
            ? <MdClear color="#0D334D" size={27} onClick={() => setToggleMenu(false)} />
            : <MdMenu color="#0D334D" size={27} onClick={() => setToggleMenu(true)} />
          }
          { toggleMenu && (
            <div className='haven__navbar-menu_container scale-up-center'>
                <div className='haven__navbar-menu_container-links'>
                  <Menu />
                  <div className='haven__navbar-menu_container-links-download'>
                  <button type='button'><MdOpenInNew /> <span className='download-text'> Download App </span></button>
                  </div>
                </ div>
            </div>
          )

          }
      </div>
    </div>
  )
}

export default Navbar
