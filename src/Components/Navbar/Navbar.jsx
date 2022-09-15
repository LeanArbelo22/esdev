import React from 'react';
import './Navbar.scss';
import Logo from '../../assets/img/icon2.svg';
import NavItems from './NavItems/NavItems';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-wrapper'>
            <div className="logo-container">
                <img src={Logo} alt="logo esdev" />
                <h1>ESDev</h1>
            </div>
            <NavItems />
        </div>
    </div>
  )
}

export default Navbar;