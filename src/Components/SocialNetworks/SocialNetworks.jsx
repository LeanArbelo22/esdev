import React from 'react';
import { Link } from 'react-router-dom';
import './SocialNetwork.scss';
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

function SocialNetworks({ direction = '' }) {
  const icons = [
    {
      link: '/#ig',
      icon: <FaInstagram />
    },
    {
      link: '/#li',
      icon: <FaLinkedinIn />
    },
    {
      link: '/#wa',
      icon: <FaWhatsapp />
    }
  ]

  return (
    <ul className={`icons ${direction}`}>
      {
        icons.map(icon => {
          return (
            <li key={icon.link}>
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