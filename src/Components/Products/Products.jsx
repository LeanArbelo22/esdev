import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../Animations/Button/Button';
import './Products.scss';
import LogoSEF from '../../assets/img/SEF-Logo-Color.png'

function Products() {
    const [moreInfo, setMoreInfo] = useState(false);
    const handleClick = () => setMoreInfo(true);
    
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_gmail', 'template_0l0au5g', form.current, 'egrw1HiuWJA3l-Wwv')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      e.target.reset();
    }

  return (
    <div className='products'>
        <div className="left">
            <div className="title">
                <h3>Smart Effortless Filter</h3>
                <span>(SEF)</span>
            </div>
            <div className="description">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquid non tempora molestiae deserunt unde adipisci beatae. Suscipit quis ratione repudiandae odit aut consequatur nesciunt!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptate illum quas accusamus, incidunt velit sunt sint temporibus at dolorum nam ratione delectus quasi eligendi.</p>
            </div>
            <Button click={handleClick}>Más información</Button>
            { 
                moreInfo && <form ref={form} onSubmit={sendEmail} className="more-info">
                    <span>Escribe tu correo y nos comunicaremos contigo</span>
                    <div className="inputs">
                        <input type='email' name='email' placeholder='Tu correo' required />
                        <input type='submit' placeholder='Enviar' />
                    </div>
                </form>
            }
        </div>
        <div className="right">
            <img src={LogoSEF} alt="SEF Logo" />
        </div>
    </div>
  )
}

export default Products;