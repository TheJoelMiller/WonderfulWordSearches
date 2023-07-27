import React from 'react';
import selfPicture from '../../JMiller.png';
const About = () =>{
  return (
    <div className = "about">
      <h3>About</h3>
      <div>
      <img src= {selfPicture} alt='Self Picture'/>
        <p>My name is Joel Miller. I am a student at Code Kentucky and I enjoy computer programming.</p>
      </div>
    </div>
  );
}
export default About;