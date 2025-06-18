import React, { useState } from "react";
import Asteroid from "./Asteroide";
import Hal from "./Hal";

const anecdotes = [
  "J'ai fais l'école d'ingénieur CPE Lyon.",
  "J'ai un profil certifié Drupal.",
  "Je suis fan d'échec (en ligne)",
  "J'ai fais les scouts.",
  "J'ai trois modules de publiés sur Drupal.org.",
  "Mon film préféré est 2001 : Odyssé de l'espace.",
  "Je rêve de visiter la NASA.",
  "Je donne des cours de web à CPE Lyon.",
  "J'ai été animateur scouts.",
  "J'ai réalisé une migration Drupal 9 vers 10",
  "Sur Lol, j'ai déjà été Iron IV 0 LP",
];

function Divers() {
  const sectionHeight = window.innerHeight;
  const margin = 80;

  const [asteroidKey, setAsteroidKey] = useState(0);

  const getRandomTop = () =>
    Math.floor(Math.random() * (sectionHeight - margin * 2)) + margin;

  const getRandomAnecdote = () =>
    anecdotes[Math.floor(Math.random() * anecdotes.length)];

  const [randomTop, setRandomTop] = useState(getRandomTop());
  const [asteroidText, setAsteroidText] = useState(getRandomAnecdote());

  const handleAsteroidOut = () => {
    setRandomTop(getRandomTop());
    setAsteroidText(getRandomAnecdote());
    setAsteroidKey((k) => k + 1);
  };

  return (
    <section className="cv-section divers-section" style={{ position: "relative" }} id='divers'>
      <Hal class="portfolio-section" text="Nous voilà dans le champ d’astéroïdes des anecdotes. Découvre leurs secrets en les survolant." />
      <Asteroid
        key={asteroidKey}
        text={asteroidText}
        top={randomTop}
        onOut={handleAsteroidOut}
      />
    </section>
  );
}

export default Divers;
