import React from 'react';
import './Navbar.scss';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-wrapper'>
            <div className="logo-container">
                <img src="" alt="logo esdev" />
                <h3>ESDev</h3>
            </div>
            <div className="nav-items">
                <h3>Hola</h3>
                <h3>Todo</h3>
                <h3>Bien</h3>
            </div>
        </div>
    </div>
  )
}

export default Navbar;