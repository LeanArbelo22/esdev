import React from 'react';
import { Link } from 'react-router-dom';
import './SocialNetwork.scss';
import { BsInstagram, BsWhatsapp, BsLinkedin } from 'react-icons/bs';

function SocialNetworks() {
  return (
    <div className={`icons`}>
        <Link to='/whatsapp'><BsWhatsapp /></Link>
        <Link to='/instagram'><BsInstagram /></Link>
        <Link to='/linkedin'><BsLinkedin /></Link>
    </div>
  )
}

export default SocialNetworks;