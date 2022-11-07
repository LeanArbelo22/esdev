import React from 'react';
import './Services.scss';

function Services() {
  return (
    <div className="services">
        <div className="first">
            <div className="app">
                <h3>Aplicaciones web (SPA)</h3>
            </div>
            <div className="desk">
                <h3>Aplicaciones de escritorio para Windows y Linux</h3>
            </div>
            <div className="datab">
                <h3>Desarrollo y administracion de Bases de Datos SQL y NoSQL</h3>
            </div>
            <div className="datac">
                <h3>Ciberseguridad y asesoramiento en Ciberdelitos</h3>
            </div>
            <div className="cloud">
                <h3>Cloud Computing - Servidores en la nube</h3>
            </div>
            <div className="bot">
                <h3>Bots para el manejo de redes sociales</h3>
            </div>
        </div>
    </div>
  )
}

export default Services;