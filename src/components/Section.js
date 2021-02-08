import React from 'react';
import '../App.css';
import {Button} from './Button';
import './Section.css';

function Section() {
  return (
    <div className='container'>
      <video src='assets/backgroundvid.mkv' autoPlay loop muted playsInline poster="assets/4.jpg"/>
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
