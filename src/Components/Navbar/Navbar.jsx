import React from 'react';
import './Navbar.scss';
import LogoImg from '../../assets/img/Logo-notext.png';
import NavItems from './NavItems/NavItems';
import Brand from './Brand/Brand';
import Burguer from './Burguer/Burguer';
import { Link } from 'react-router-dom';

function Navbar({ isOpen, setIsOpen }) {
  return (
    <div className={`navbar ${isOpen && 'open'}`}>
        <div className='navbar-wrapper'>
            <div className='logo-container'>
                <img src={LogoImg} alt="logo esdev" />
              <Link to="/">
                <Brand />
              </Link>
            </div>
            <NavItems />
            <Burguer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    </div>
  )
}

export default Navbar;