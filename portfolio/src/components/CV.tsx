import React, { useEffect, useState, useRef } from 'react';
import '../style/CV.css';
import MainSpaceMan from './MainSpaceMan';
import Background from './Background';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Divers from './Divers';
import HalMenu from './HalMenu';
import Contact from './Contact';

function CV() {
  const [spacemanPosition, setSpacemanPosition] = useState<[number, number]>([window.innerWidth / 2, window.innerHeight / 2]);
  const cvRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const spacemanWidth = 80;
      const spacemanHeight = 80;
      
      const centerX = (window.innerWidth - spacemanWidth) / 2;
      
      const centerY = window.scrollY + (window.innerHeight - spacemanHeight) / 2;
      
      setSpacemanPosition([centerX, centerY]);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
  }, [spacemanPosition]);

  return (
    <>
    <HalMenu></HalMenu>
    <div className="cv-container" ref={cvRef}>
      <MainSpaceMan startPosition={spacemanPosition} />
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Divers></Divers>
      <Contact></Contact>
    </div>
    <Background></Background>
    </>
  );
}

export default CV;
