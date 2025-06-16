import React, { useEffect, useRef, useState } from "react";
import asteroid1 from "../images/asteroid_1.png";
import asteroid2 from "../images/asteroid_2.png";
import "../style/Asteroid.css";

interface AsteroidProps {
  text: string;
  top?: number;
  onOut?: () => void;
}

const images = [asteroid1, asteroid2];

function Asteroid({ text, top = 100, onOut }: AsteroidProps) {
  const [position, setPosition] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [hasBeenHovered, setHasBeenHovered] = useState(false);
  const runningRef = useRef(true);

  // Pour déclencher onOut dans un effet
  const [hasExited, setHasExited] = useState(false);

  useEffect(() => {
    runningRef.current = true;
    const speed = 1;
    const animate = () => {
      setPosition((prev) => {
        if (prev < window.innerWidth + 100 && runningRef.current) {
          return prev + speed;
        } else {
          if (!hasExited) setHasExited(true);
          return prev;
        }
      });
      if (runningRef.current && position < window.innerWidth + 100) {
        requestAnimationFrame(animate);
      }
    };
    animate();
    return () => {
      runningRef.current = false;
    };
    // eslint-disable-next-line
  }, []);

  // Appelle onOut uniquement quand hasExited passe à true
  useEffect(() => {
    if (hasExited && onOut) {
      onOut();
    }
    // eslint-disable-next-line
  }, [hasExited, onOut]);

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 350);
    return () => clearInterval(timer);
  }, []);

  const handleMouseEnter = () => {
    setHovered(true);
    setHasBeenHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="asteroid"
      style={{
        left: position,
        top: top,
        position: "absolute",
        width: 180,
        height: 120,
        backgroundImage: `url(${images[imgIndex]})`,
        backgroundSize: "cover",
        zIndex: 20,
        cursor: "pointer",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {(hovered || hasBeenHovered) && (
        <div className="asteroid-bubble">
          {text}
        </div>
      )}
    </div>
  );
}

export default Asteroid;
