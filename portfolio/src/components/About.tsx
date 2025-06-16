import image from '../images/moi_carre.png';
import Hal from './Hal';

function About() {
    return (
        <section className="cv-section about-section">
        <Hal class="portfolio-section" text="Bonjour Major Tom, je serais votre guide lors de votre voyage. N'hésitez pas à survoler les planètes afin qu'elles vous révèlent tous leurs secrets."></Hal>
        <div className="planet planet-about">
            <div className="planet-content">
            <h2>A propos</h2>
            <p className="bio">
                Bonjour, je suis Philippe, ingénieur passionné par l’univers du web. Embarquez pour un voyage à travers la galaxie et découvrez-en davantage sur mon parcours et mes projets.
            </p>
            </div>
        </div>
        <div className="planet planet-photo">
            <img src={image} alt="Philippe" />
        </div>
      </section>     
    );
}


export default About;