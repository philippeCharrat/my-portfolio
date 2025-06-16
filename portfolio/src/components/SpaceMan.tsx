import React, { useEffect, useState } from "react";
import image1 from "../images/spaceman_1.png";
import image2 from "../images/spaceman_2.png";
import '../style/SpaceMan.css'

const images = [image1, image2];

interface SpaceManProps {
  startPosition?: [number, number];  
  setViewTitle?: (view: boolean) => void;
}

function SpaceMan({ startPosition, setViewTitle }: SpaceManProps) {
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState({ 
    x: startPosition?.[0] || -1, 
    y: startPosition?.[1] || -1,
    rotation: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const interval = 300;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  useEffect(() => {
    console.log(startPosition);
    if (!startPosition || startPosition.length < 2 || startPosition[0] === -1) {
      setIsVisible(false);
      return;
    }
    
    setIsVisible(true);
    
    const [startX, startY] = startPosition;
    
    setPosition({
      x: startX,
      y: startY,
      rotation: 0
    });
    
    const duration = 2500;
    const finalY = -400;
    const startTime = Date.now();
    
    const fallAnimation = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      const newY = startY - (progress * (startY - finalY));
      const newRotation = progress * 360;
      
      setPosition(prev => ({
        ...prev,
        y: newY,
        rotation: newRotation
      }));

      if (newY <= 200  && setViewTitle) {
          setViewTitle(true);
      }

      if (newY <= -300) {
        clearInterval(fallAnimation);
        setIsVisible(false);
        if (setViewTitle) {
          console.log('title')
          setViewTitle(true);
        }
      }
    }, 16);
    
    return () => clearInterval(fallAnimation);
  }, [startPosition]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="spaceman"
      style={{
        backgroundImage: `url(${images[index]})`,
        left: `${position.x}px`,
        bottom: `${position.y}px`,
        transform: `rotate(${position.rotation}deg)`,
      }}
    />
  );
}

export default SpaceMan;
