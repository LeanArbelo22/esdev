import React from 'react';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
// import Loader from '../Animations/Loader/Loader';
import './Home.scss';

function Home() {
  return (
    <div className='home'>
      <div className="home-top">
        <h1>Home</h1>
      </div>
      <div className="home-footer">
        <SocialNetworks />
      </div>
    </div>
  )
}

export default Home;