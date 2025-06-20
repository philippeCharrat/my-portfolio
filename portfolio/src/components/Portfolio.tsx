import Hal from './Hal';

function Portfolio() {
    return (
      <section className="cv-section portfolio-section" id='portfolio'>
        <Hal class="portfolio-section" text="Tom, te voilà face aux planètes à projet."></Hal>
        <div className="planet-system">
          <div className="planet planet-project planet-picture planet-medium">
            <div className="planet-content">
              <h3>Picture arena</h3>
              <p>TCG basé sur les photos de l'utilisateurs via de la génération IA.</p>
              <a href="https://gitlab.com/charrat.p/picturearenafinal" className="project-link" target='_blank'>Voir le code</a>
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
              <a href="https://www.drupal.org/u/pcharrat" className="project-link" target='_blank'>Voir mon profil</a>
            </div>
          </div>
          
          <div className="planet planet-project planet-orange planet-medium">
            <div className="planet-content">
              <h3>Orange</h3>
              <p>Maintient de l'usine à sites d'Orange Communication</p>
            </div>
          </div>
          <div className="planet planet-project planet-sofrecom planet-medium">
            <div className="planet-content">
              <h3>Sofrecom</h3>
              <p>Création de l'intranet Sofrecom</p>
            </div>
          </div>
          <div className="planet planet-project planet-lead planet-medium">
            <div className="planet-content">
              <h3>Un lead presque parfait</h3>
              <p>Un site pour tester votre profil de développeur.</p>
              <a href="https://un-lead-presque-parfait.labruz.fr/" className="project-link" target='_blank'>Faites le test</a>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Portfolio;