import React, { useEffect, useState } from "react";
import "../style/Background.css";
import image1 from "../images/space_1.png";
import image2 from "../images/space_2.png";

const images = [image1, image2];

function Background({}) {
  const [index, setIndex] = useState(0);
  const interval = 300;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div
      className="background-switcher"
      style={{
        backgroundImage: `url(${images[index]})`,
      }}
    />
  );
}

export default Background;
