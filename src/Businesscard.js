import React from 'react';
import './Businesscard.css';
import userPhoto from './images/user_photo.png';
const Businesscard = () => {
  return (
    <div className="business-card">
      <img src={userPhoto} alt="user-photo"></img>
      <h1>Diogo Coelho</h1>
      <h2>About me</h2>
      <p>Hello! I'm Diogo, a Lisbon-born enthusiast with a passion for both physical exercise and the digital world. Recently, I embarked on an exciting journey into web development, completing a rigorous bootcamp at Ironhack to hone my skills in coding and problem-solving. During this program, I had the opportunity to work extensively with the MERN stack, solidifying my expertise in modern web technologies.
      </p>
      <h3 className='strong-points'>Strong Points:</h3>
      <button className='skills'>MERN Stack</button>
      <button className='skills'>Communication</button>
      <button className='skills'>Problem Solving</button>
      <button className='skills'>Teamwork</button>
      <button className='skills'>Adaptability</button>
      <div className='fun-fact'>
        <p><span>Fun fact</span></p>
        <p>I have a 3 legged dog!!</p>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/diogo-coelho-9360a9268/" target="_blank"><button className='social'>Linkedin</button></a>
        <a href="https://github.com/DiogoCoelho98" target="_blank"><button className='social'>Github</button></a>
        <a href="mailto:diogocoelho19988@gmail.com"><button class="social">Email</button></a>
      </div>
    </div >
  );
};

export default Businesscard;

