import React from 'react';
import '../Navbar.scss';

function Burguer({ isOpen, setIsOpen }) {

  return (
      <button className={`burguer ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </button>  
  )
}

export default Burguer;