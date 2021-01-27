import React from 'react';
import '../App.css';
import {Button} from './Button';
import './Section.css';

function Section() {
  return (
    <div className='container'>
      {/*<img src='assets/background.jpg' alt='background'></img>*/}
      <video src='assets/backgroundvid.mp4' autoPlay loop muted />
      <h1>LAKSHYA PORWAL</h1>
      <p>Electronics and Instrumentation</p>
      <p>Web Developer</p>
      <div className="btns">
        <Button 
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          HIRE ME
        </Button>
      </div>
      
    </div>
  )
}

export default Section
