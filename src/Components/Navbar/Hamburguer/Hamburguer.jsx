import React from 'react';
import '../Navbar.scss';

function Hamburguer({ isOpen, setIsOpen }) {

  return (
    <div className={`hamburguer ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Hamburguer;