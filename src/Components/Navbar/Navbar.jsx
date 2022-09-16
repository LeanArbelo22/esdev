import React from 'react';
import './Navbar.scss';
import LogoImg from '../../assets/img/icon2.svg';
import NavItems from './NavItems/NavItems';
import Brand from './Brand/Brand';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-wrapper'>
            <div className='logo-container'>
                <img src={LogoImg} alt="logo esdev" />
                <Brand />
            </div>
            <NavItems />
        </div>
    </div>
  )
}

export default Navbar;