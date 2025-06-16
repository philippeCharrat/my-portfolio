import React, { useEffect, useState, useRef } from "react";
import image1 from "../images/spaceship_1.png";
import image2 from "../images/spaceship_2.png";
import image3 from "../images/spaceship_3.png";
import '../style/SpaceShip.css'

const images = [image1, image2, image3];

interface SpaceShipProps {
  setStartPosition?: (position: [number, number]) => void;
}

function SpaceShip({ setStartPosition }: SpaceShipProps) {
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState({ x: 10, y: 10, rotation: 45 });
  const hasTriggeredCallbackRef = useRef(false); 
  const interval = 300;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  useEffect(() => {
    hasTriggeredCallbackRef.current = false;
    
    const totalDistanceX = window.innerWidth - 100 - position.x;
    const totalDistanceY = window.innerHeight - 100 - position.y;
    const totalRotation = 60 - 45;
    const duration = 4000;
    const updateInterval = 30;
    const steps = duration / updateInterval;
    const incrementX = totalDistanceX / steps;
    const incrementY = totalDistanceY / steps;
    const incrementRotation = totalRotation / steps;
    
    const midpointX = window.innerWidth / 2;
    const midpointY = window.innerHeight / 2;
    const triggerZoneSize = 50; 
    
    const moveInterval = setInterval(() => {
      setPosition(prev => {
        if (prev.x >= window.innerWidth - 100 && prev.y >= window.innerHeight - 100) {
          clearInterval(moveInterval);
          return prev;
        }
        
        const newX = prev.x + incrementX;
        const newY = prev.y + incrementY;
        const newRotation = prev.rotation + incrementRotation;
        
        const isInTriggerZoneX = Math.abs(newX - midpointX) < triggerZoneSize;
        const isInTriggerZoneY = Math.abs(newY - midpointY) < triggerZoneSize;
        
        if (!hasTriggeredCallbackRef.current && isInTriggerZoneX && isInTriggerZoneY) {
          console.log("Déclenchement à la position:", [newX, newY]);
          
          if (setStartPosition) {
            hasTriggeredCallbackRef.current = true; 
            setTimeout(() => {
              setStartPosition([newX, newY]);
            }, 0);
          }
        }
        
        return {
          x: newX,
          y: newY,
          rotation: newRotation
        };
      });
    }, updateInterval);
    
    return () => clearInterval(moveInterval);
  }, [setStartPosition]); 

  return (
    <div
      className="spaceship-switcher"
      style={{
        backgroundImage: `url(${images[index]})`,
        left: `${position.x}px`,
        bottom: `${position.y}px`,
        transform: `rotate(${position.rotation}deg)`
      }}
    />
  );
}

export default SpaceShip;
