import React, { useState, useEffect } from 'react';
import Logo from '../../assets/img/Logo-notext.png';
import Button from '../Animations/Button/Button';
import Letters from '../Animations/Letters/Letters';
import './Contact.scss';

function Contact() {
    const [letterClass, setLetterClass] = useState();

    const logoArray = ['C','o','n','t','a', 'c', 't', 'a', 'n', 'o', 's'];

    useEffect(() => {
        setLetterClass('text-animate-hover')
    }, []);

  return (
    <div className='contact'>
      <div className="decoration">
        <img src={Logo} alt="img logo" />
      </div>
      <div className="form-container">
        <form className='contact-form'>
        <Letters
            letterClass={`${letterClass}`}
            strings={logoArray}
            index={1} />
          <input type='text' name='name' placeholder='Nombre' required />
          <input type='email' name='email' id='email' placeholder='Email' required />
          <input type='tel' name='tel' id='tel' placeholder='Tu telefono' />
          <textarea name='message' id='message' placeholder='Tu mensaje' required />
          <Button>Enviar</Button>
        </form>
      </div>
    </div>
  )
}

export default Contact;