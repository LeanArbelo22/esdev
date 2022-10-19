import React from 'react';
import { Link } from 'react-router-dom';
import './SocialNetwork.scss';
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

function SocialNetworks({ direction = '' }) {
  const icons = [
    {
      link: 'https://www.instagram.com/esdev.argentina/',
      icon: <FaInstagram />
    },
    {
      link: '/#',
      icon: <FaLinkedinIn />
    },
    {
      link: 'https://wa.me/5493512503060',
      icon: <FaWhatsapp />
    }
  ]

  return (
    <ul className={`icons ${direction}`}>
      {
        icons.map(icon => {
          return (
            <li key={icon.link}>
              <a href={icon.link} target="_blank" rel="noreferrer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>{icon.icon}</span>
              </a>
            </li>
          )
        })
      }





    </ul>
  )
}

export default SocialNetworks;