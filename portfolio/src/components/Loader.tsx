import React, { useState, useEffect } from 'react';
import image from '../images/loader.png';
import '../style/Load.css';

function Loader() {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="load">
      <div className="load-center">
        <img
          src={image}
          className={`load-img${dotCount % 2 === 0 ? ' blink' : ''}`}
          alt="Chargement"
        />
        <p>
          Chargement
          <span className="load-dots">
            {'.'.repeat(dotCount)}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Loader;
