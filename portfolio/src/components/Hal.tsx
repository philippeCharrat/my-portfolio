import React, { useEffect, useRef, useState } from "react";
import halImg from "../images/hal.png";
import '../style/Hal.css';

interface HalProps {
  text: string;
  class: string;
}

const GBA_SPEED = 250;

function Hal({ text, class: className }: HalProps) {
  const [visible, setVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [showBubble, setShowBubble] = useState(false);
  const halRef = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);


  useEffect(() => {
    const container = document.querySelector(`.${className}`) as HTMLElement;
    if (!container || !halRef.current) return;

    const x = container.offsetWidth - 400;
    halRef.current.style.right = `10px`;
    halRef.current.style.top = `0px`;
  }, [className]);

  useEffect(() => {
    if (!halRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio === 1) {
          setVisible(true);
          setShowBubble(true);
        }
      },
      { threshold: 1.0 }
    );
    observer.observe(halRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    setDisplayedText(""); // reset
    setWordIndex(0);
  }, [visible, text]);

  useEffect(() => {
    if (!visible) return;
    const words = text.split(" ");
    if (wordIndex >= words.length) return;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + (wordIndex > 0 ? " " : "") + words[wordIndex]);
      setWordIndex(wordIndex + 1);
    }, GBA_SPEED);

    return () => clearTimeout(timeout);
  }, [visible, text, wordIndex]);

return (
  <div
    ref={halRef}
    style={{
      position: "absolute",
      opacity: visible ? 1 : 0,
      transition: "opacity 0.6s",
      pointerEvents: "none",
      zIndex: 10,
    }}
  >
    {visible && (
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        {showBubble && (
          <div className='hal-text' style={{ marginRight: 16 }}>
            {displayedText}
          </div>
        )}
        <img src={halImg} alt="Hal" style={{ width: 80, height: 80 }} />
      </div>
    )}
  </div>
);
}

export default Hal;
