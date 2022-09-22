import React from 'react';
import { Link } from 'react-router-dom';
import './SocialNetwork.scss';
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

function SocialNetworks() {
  const icons = [
    {
      link: '/instagram',
      icon: <FaInstagram />
    },
    {
      link: '/linkedin',
      icon: <FaLinkedinIn />
    },
    {
      link: '/whatsapp',
      icon: <FaWhatsapp />
    }
  ]

  return (
    <ul className={`icons`}>
      {
        icons.map(icon => {
          return (
            <li key={icon}>
              <Link to={icon.link}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>{icon.icon}</span>
              </Link>
            </li>
          )
        })
      }





    </ul>
  )
}

export default SocialNetworks;