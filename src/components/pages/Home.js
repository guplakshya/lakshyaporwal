import React from 'react';
import '../../App.css'
import Section from '../Section'
import About from './About'
import Project from './Project'
import Contact from './Contact'

function Home(){
  return(
    <>
      <Section/>
      <About />
      <Project />
      <Contact />
    </>
  )
};

export default Home;