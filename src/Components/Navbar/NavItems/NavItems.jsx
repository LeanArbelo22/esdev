import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navbar.scss';

const Item = ({children, url}) => <NavLink to={`/${url}`}>{children}</NavLink>;
const pages = [{text: 'Desarrollo', url: 'development'}, {text: 'Nosotros', url: 'us'}, {text: 'Trabajos', url: 'works'}];

function NavItems() {
  return (
    <div className="nav-items">
        {
            pages.map((page, index) => {
                return(
                    <div key={index} className="item-container">
                        <Item url={page.url} className="nav-item">{page.text}</Item>
                    </div>
                )
            })
        }
    </div>
  )
}

export default NavItems;