import Hal from './Hal';

function Portfolio() {
    return (
      <section className="cv-section portfolio-section" id='portfolio'>
        <Hal class="portfolio-section" text="Tom, te voilà face aux planètes à projet."></Hal>
        <div className="planet-system">
          <div className="planet planet-project planet-picture planet-medium">
            <div className="planet-content">
              <h3>Picture arena</h3>
              <p>Projet de fin d'étude d'un jeu de carte basé sur les photos de l'utilisateurs via de la reconnaissance par IA.</p>
              <a href="https://gitlab.com/charrat.p/picturearenafinal" className="project-link">Voir le code</a>
            </div>
          </div>

          <div className="planet planet-project planet-ivrd planet-medium">
            <div className="planet-content">
              <h3>i.vrd</h3>
              <p>Un site vitrine pour un bureau d'étude et SEO</p>
              <a href="http://www.ivrd.fr" className="project-link">S'y rendre</a>
            </div>
          </div>
          
          <div className="planet planet-project planet-drupal planet-medium">
            <div className="planet-content">
              <h3>Modules Drupal</h3>
              <p>Divers contributions au CMS Drupal</p>
              <a href="https://www.drupal.org/u/pcharrat" className="project-link">Voir mon profil</a>
            </div>
          </div>
          
          <div className="planet planet-project planet-orange planet-medium">
            <div className="planet-content">
              <h3>Orange</h3>
              <p>Maintient de l'usine à sites d'Orange Communication</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Portfolio;