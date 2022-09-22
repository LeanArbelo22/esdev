import React from 'react';
import NavItems from '../Navbar/NavItems/NavItems';
import './Menu.scss';

function Menu({ isOpen, setIsOpen }) {
  return (
    <div className={`menu ${isOpen && 'open'}`}>
      <NavItems isMenu={true} setIsOpen={setIsOpen} />
    </div>
  )
}

export default Menu;