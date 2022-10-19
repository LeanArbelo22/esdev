import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Logo from '../../assets/img/Logo-notext.png';
import Button from '../Animations/Button/Button';
import Letters from '../Animations/Letters/Letters';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import './Contact.scss';

function Contact() {
  const [letterClass, setLetterClass] = useState();
  const [myMessage, setMyMessage] = useState(false);
  const [displayImage, setDisplayImage] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  const [displayIcons, setDisplayIcons] = useState(false);

  const logoArray = ['C', 'o', 'n', 't', 'a', 'c', 't', 'a', 'n', 'o', 's'];

  useEffect(() => {
    setLetterClass('text-animate-hover');
    setDisplayForm(true);
    setDisplayIcons(true);
  }, []);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_r4quxdd', 'template_280jxcq', form.current, '_UkZjLnaeV3bWTjx2')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    setMyMessage(true);
  }

  useEffect(() => {
    if (myMessage) {
      setTimeout(() => setMyMessage(false), 5000)
    }
  }, [myMessage])

  useEffect(() => {
    setTimeout(() => setDisplayImage(true), 100)
  }, [])

  return (
    <div className='contact'>
      <div className="decoration">
        <img src={Logo} className={`${displayImage && 'show-img'}`} alt="img logo" />
      </div>
      <div className={`form-container ${displayForm && 'open'}`}>
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
          <Letters
            letterClass={`${letterClass}`}
            strings={logoArray}
            index={1} />
          <input type='text' name='name' placeholder='Nombre' required />
          <input type='email' name='email' id='email' placeholder='Email' required />
          <input type='tel' name='tel' id='tel' placeholder='Tu telefono' />
          <textarea name='message' id='message' placeholder='Tu mensaje' required />
          <Button>Enviar</Button>
          {
            myMessage && <span className='received'>Hemos recibido tu mensaje!</span>
          }
        </form>
      </div>
      <div className={`footer ${displayIcons && 'open'}`}>
        <SocialNetworks direction='column' />
      </div>
      <div className={`mobile-footer ${displayIcons && 'open'}`}>
        <SocialNetworks />
      </div>
    </div>
  )
}

export default Contact;