import React, { useEffect, useState, useRef } from "react";
import Hal from "./Hal";
import hole from "../images/hole.png";
import '../style/Contact.css'
import image1 from "../images/spaceman_walk_1.png";
import image2 from "../images/spaceman_walk_2.png";
import image3 from "../images/spaceman_walk_3.png";
import image4 from "../images/spaceman_walk_4.png";
import see1 from "../images/spaceman_see_1.png";
import see2 from "../images/spaceman_see_2.png";
import see3 from "../images/spaceman_see_3.png";
import turn1 from "../images/spaceman_turn_1.png";
import turn2 from "../images/spaceman_turn_2.png";
import getPanel1 from "../images/spaceman_get_panel_1.png";
import getPanel2 from "../images/spaceman_get_panel_2.png";
import getPanel3 from "../images/spaceman_get_panel_3.png";
import getPanel4 from "../images/spaceman_get_panel_4.png";
import contact1 from "../images/spaceman_contact_1.png";
import contact2 from "../images/spaceman_contact_2.png";
import ground from "../images/ground.png"
import mono from '../images/mono.png';

const walkImages = [image1, image2, image3, image4, image3, image2];
const seeImages = [see1, see2, see3];
const turnImages = [turn1, turn2];
const getPanelImages = [getPanel1, getPanel2, getPanel3, getPanel4];
const contactImages = [contact1, contact2];

const sequence = [
  { name: 'walk', images: walkImages, loop: false },
  { name: 'see', images: seeImages, loop: false },
  { name: 'turn', images: turnImages, loop: false },
  { name: 'getPanel', images: getPanelImages, loop: false },
  { name: 'contact', images: contactImages, loop: true },
];

function Contact() {
  const [seqIndex, setSeqIndex] = useState(0); 
  const [frame, setFrame] = useState(0);
  const [left, setLeft] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const maxLeft =  window.innerWidth <= 768 ? window.innerWidth - 250 : window.innerWidth - 400;

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const { name, images, loop } = sequence[seqIndex];
    let timer = setInterval(() => {
      setFrame((prev) => {
        if (name === 'walk') {
          setLeft((oldLeft) => {
            if (oldLeft < maxLeft) {
              return oldLeft + 80;
            } else {
              return oldLeft;
            }
          });
          if (left >= maxLeft && prev === images.length - 1) {
            setSeqIndex((i) => i + 1);
            return 0;
          }
        }
        if (prev + 1 < images.length) {
          return prev + 1;
        } else {
          if (loop) {
            return 0;
          } else {
            if (name !== 'walk') setSeqIndex((i) => (i + 1 < sequence.length ? i + 1 : i));
            return 0;
          }
        }
      });
    }, 300);
    return () => clearInterval(timer);
  }, [seqIndex, left, visible]);

  const currentImages = sequence[seqIndex].images;

  return (
    <section
      className="cv-section contact-section psychedelic-bg"
      style={{ position: "relative" }}
      id="contact"
      ref={sectionRef}
    >
      <img src={hole} className="blackhole" alt="" />
      <div className="planet planet-contact">
            <div className="planet-content">
            <h2>Pour me contacter</h2>
            <p className="bio">
                Vous pouvez m'ajouter sur Linkedin :  <a href="https://www.linkedin.com/in/philippe-charrat/">ici</a> ou sur X: <a href="https://x.com/philippe_pol/">ici</a>
            </p>
            </div>
        </div>
      <div
        className={["contact","getPanel"].includes(sequence[seqIndex].name) ? "spaceman mobile-spaceman lil-man" : "spaceman lil-man" }
        style={{
          backgroundImage: `url(${currentImages[frame]})`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `bottom`,
          left: ["contact","getPanel"].includes(sequence[seqIndex].name) ? `${left-200}px` : `${left}px`,
          bottom: `0px`,
          width: ["contact","getPanel"].includes(sequence[seqIndex].name) ? "394px" : `200px`,
          height: `340px`,
          position: "absolute",
        }}
      />
      <img src={mono} className="mono" alt="" />
      <div
        className="ground"
        style={{
          backgroundImage: `url(${ground})`,
          backgroundPosition: `bottom`,
          bottom: `-290px`,
          width: window.innerWidth,
          height: `340px`,
          position: "absolute",
        }}
      >
      </div>
    </section>
  );
}

export default Contact;
