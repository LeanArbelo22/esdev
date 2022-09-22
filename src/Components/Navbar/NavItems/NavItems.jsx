import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navbar.scss';

const pages = [{ text: 'Nosotros', url: '/' }, { text: 'Servicios', url: '/services' }, { text: 'Productos', url: '/products' }, { text: 'Contacto', url: '/contact' }];

function NavItems({ isMenu = false, setIsOpen }) {
    const handleClick = () => {
        if (isMenu) setIsOpen(false);
        return
    }
    return (
        <div className="nav-items" onClick={handleClick}>
            {
                pages.map((page, index) => {
                    return (
                        <div key={index} className="item-container">
                            <NavLink className='nav-item' to={page.url} end>{page.text}</NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NavItems;