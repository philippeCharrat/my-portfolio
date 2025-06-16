import React, { useEffect, useState, useRef } from "react";
import image1 from "../images/spaceman_1.png";
import image2 from "../images/spaceman_2.png";
import '../style/MainSpaceMan.css';

const images = [image1, image2];

interface MainSpaceManProps {
  startPosition?: [number, number];
}

function MainSpaceMan({ startPosition }: MainSpaceManProps) {
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState({ x: startPosition?.[0] || 0, y: 0 });
  const [isNearTarget, setIsNearTarget] = useState(false);
  const [isAvoiding, setIsAvoiding] = useState(false);
  const [avoidDirection, setAvoidDirection] = useState<"left" | "right" | null>(null);

  const positionRef = useRef(position);
  const rotationRef = useRef(0);
  const [rotation, setRotation] = useState(0);

  const targetY = startPosition?.[1] || 0;
  const targetX = startPosition?.[0] || 0;

  useEffect(() => {
    positionRef.current = position;
  }, [position]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 300);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const updatePosition = () => {
      const currentPos = positionRef.current;
      const spacemanWidth = 80;
      const spacemanHeight = 80;

      let newX = currentPos.x;
      let newY = currentPos.y;
      let avoiding = false;
      let direction: "left" | "right" | null = avoidDirection;

      const planets = document.querySelectorAll('.planet');
      planets.forEach((planet) => {
        const planetRect = planet.getBoundingClientRect();
        const planetAbs = {
          left: planetRect.left + window.scrollX,
          top: planetRect.top + window.scrollY,
          right: planetRect.right + window.scrollX,
          bottom: planetRect.bottom + window.scrollY
        };
        const spacemanRect = {
          left: newX,
          top: newY,
          right: newX + spacemanWidth,
          bottom: newY + spacemanHeight
        };
        if (
          spacemanRect.right > planetAbs.left &&
          spacemanRect.left < planetAbs.right &&
          spacemanRect.bottom > planetAbs.top &&
          spacemanRect.top < planetAbs.bottom
        ) {
          avoiding = true;
          if (!direction) {
            if (spacemanRect.left < planetAbs.left) direction = "left";
            else direction = "right";
          }
        }
      });

      if (avoiding) {
        setIsAvoiding(true);
        setAvoidDirection(direction);

        newY -= 2;
        if (direction === "left") newX -= 2;
        if (direction === "right") newX += 2;

        rotationRef.current = (rotationRef.current + 10) % 360;
        setRotation(rotationRef.current);
      } 
      else {
        if (isAvoiding) {
          if (avoidDirection === "left") newX -= 2;
          if (avoidDirection === "right") newX += 2;
          newY -= 1;
          if (
            (avoidDirection === "left" && newX < targetX - 60) ||
            (avoidDirection === "right" && newX > targetX + 60) ||
            newY < targetY - 60
          ) {
            setIsAvoiding(false);
            setAvoidDirection(null);
          }
        } else {
          setAvoidDirection(null);

          if (Math.abs(currentPos.y - targetY) > 0.5) {
            newY += (targetY - currentPos.y) * 0.005;
            if (0 !== rotationRef.current%360 ) {
                rotationRef.current = (rotationRef.current + 1) % 360;
                setRotation(rotationRef.current);
            }
          } 
          else {
            newY = targetY;
          }
          if (Math.abs(newY - targetY) < 2 && !isNearTarget) {
            setIsNearTarget(true);
          }
          if (isNearTarget) {
            if (Math.abs(currentPos.x - targetX) > 0.5) {
              newX += (targetX - currentPos.x) * 0.05;
            } else {
              newX = targetX;
            }
            rotationRef.current = (rotationRef.current + 1) % 360;
            setRotation(rotationRef.current);
          }
        }
      }

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (newX < 0) newX = 0;
      if (newX + spacemanWidth > viewportWidth) newX = viewportWidth - spacemanWidth;

      const visibleTop = scrollY;
      const visibleBottom = scrollY + viewportHeight;

      if (newY < visibleTop) newY = visibleTop;
      if (newY + spacemanHeight > visibleBottom) newY = visibleBottom - spacemanHeight;

      if (Math.abs(newX - currentPos.x) > 0.1 || Math.abs(newY - currentPos.y) > 0.1) {
        setPosition({ x: newX, y: newY });
      }

      if (isNearTarget && !avoiding) {
        rotationRef.current = (rotationRef.current + 1) % 360;
        setRotation(rotationRef.current);
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetX, targetY, isNearTarget, isAvoiding, avoidDirection]);

  useEffect(() => {
    setIsNearTarget(false);
  }, [targetY]);

  return (
    <div
      className="main-spaceman"
      style={{
        backgroundImage: `url(${images[index]})`,
        left: `${position.x}px`,
        top: `${position.y}px`,
        position: 'absolute',
        width: 80,
        height: 80,
        zIndex: 1000,
        transform: `rotate(${rotation}deg)`,
        transition: 'none'
      }}
    />
  );
}

export default MainSpaceMan;
