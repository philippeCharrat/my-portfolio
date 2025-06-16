import React, { useEffect, useState } from "react";
import Background from './Background';
import SpaceShip from './SpaceShip';
import '../style/Introduction.css';
import SpaceMan from "./SpaceMan";

interface IntroductionProps {
  onFinish: () => void;
}

function Introduction({ onFinish }: IntroductionProps) {
  const [starPostion, setStartPosition] = useState<[number, number]>([-1,-1]);
  const [viewTitle, setViewTitle] = useState<boolean>(false);
  const [finish, setFinish] = useState<boolean>(false);

  useEffect(() => {
    if (viewTitle) {      
      const scrollIndicator = document.querySelector('.scroll-indicator');
      if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
          setTimeout(onFinish, 1000);
        });
      }
    }
  }, [viewTitle, onFinish]);

   return (
    <div className='grid-container'>
      <div className='cell-3'>
        {viewTitle && 
          <div className="welcome-container">
            <h1 className="welcome-title">Bonjour, je suis <span className="highlight">Philippe CHARRAT</span></h1>
            <p className="welcome-subtitle">Développeur Full Stack passionné par la création d'expériences web innovantes</p>
            <div className="scroll-indicator">
              <svg className="scroll-svg" viewBox="0 0 30 50" xmlns="http://www.w3.org/2000/svg">
                <path className="scroll-arrow" d="M15 32 L10 27 L15 29 L20 27 Z" />
                <path className="scroll-arrow" d="M15 38 L10 33 L15 35 L20 33 Z" />
              </svg>
            </div>
          </div>
        }
      </div>
      <div className='cell-2'><SpaceMan startPosition={starPostion} setViewTitle={setViewTitle}></SpaceMan></div>
      <div className='cell-2'><SpaceShip setStartPosition={setStartPosition}></SpaceShip></div>
      <div className='cell-1'><Background></Background></div>
    </div>
  );
}

export default Introduction;