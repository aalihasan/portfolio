import React from 'react';
import Hero from '../Hero/Hero';
import About from '../about/About';
import Skills from '../skills/Skills';
import Education from '../education/Education';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div className="">
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
