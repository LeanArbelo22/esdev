import React, { useState, useEffect } from 'react';
import { FaFly } from 'react-icons/fa';
import BrandImage from '../../assets/img/Marca.png';
import CodeImage from '../../assets/img/Compu.png';
import './Home.scss';

function Home() {
  const [displayContentLeft, setDisplayContentLeft] = useState(false);
  const [displayContentRight, setDisplayContentRight] = useState(false);


  useEffect(() => {
    setTimeout(() => setDisplayContentLeft(true), 100)
    setTimeout(() => setDisplayContentRight(true), 900)
  }, [])

  return (
    <div className='home'>
      <div className='container-home'>
        <div className={`home-top ${displayContentLeft && 'open'}`}>
          <h2>Somos</h2>
          <img src={BrandImage} alt='Texto marca en imagen' />
          <p>Nos dedicamos al desarrollo de software personalizado para empresas, negocios o emprendimientos.</p>
          <p>Nuestro principal objetivo es ayudarte a potenciar el desarrollo de tu empresa al ofrecerte una solucion unica y de calidad para tu negocio.</p>
        </div>
        <div className={`content ${displayContentRight && 'open'}`}>
          <img src={CodeImage} alt='Imagen codigo' />
        </div>
      </div>
      <div className={`home-footer ${displayContentLeft && 'open'}`}>
        <span><FaFly />Ciudad de Córdoba, Córdoba, Argentina</span>
      </div>
    </div>
  )
}

export default Home;