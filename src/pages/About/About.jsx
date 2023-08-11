import React from 'react';
import './About.css';
import BackgroundGif from '../../sources/gifBg.gif'; // Import the locally stored GIF

const About = () => {
  return (
    <div className='about'>
      <div className='bg-gif'>
        <img src={BackgroundGif} alt="Background GIF" />
      </div>
      <div className='content'>
        <h1>
          “Welcome to my digital realm! I'm Sukrit, a front-end developer crafting immersive web experiences”
        </h1>
      </div>
    </div>
  );
}

export default About;
