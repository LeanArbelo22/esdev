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
      emailjs.sendForm('service_r4quxdd', 'template_29xq9kh', form.current, '_UkZjLnaeV3bWTjx2')
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
                <p>Sistema diseñado para la gestion automatica de consultas de clientes via Whatsapp, que mediante un chatbot entrenado con inteligencia artificial separa al cliente potencial del 
                que solo tiene curiosidad sobre el producto o servicio ofrecido. 
                Ademas ofrece un control total de las conversaciones y datos de los clientes permitiendo al administrador supervisar a sus empleados y hacer un correcto seguimiento de cada consulta en tiempo real.</p>
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