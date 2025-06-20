import Hal from './Hal';
import '../style/Skills.css';

function Skills() {
    return (
        <section className="cv-section skills-section" id='skills'>
          <Hal class="skills-section" text="Capitaine, nous voilà arrivé dans la galaxie des compétences."></Hal>
          <div className="planet-system">

            <div className="planet main-planet">
              <div className="planet-content">
                <h3>Back-end</h3>
                <p>PHP</p>
                <p>Symfony</p>
                <p>Java</p>
              </div>
            </div>

            <div className="planet planet-small frontend-planet">
              <div className="planet-content">
                <h3>Front-end</h3>
                <p>TypeScript</p>
                <p>React</p>
                <p>Angular</p>
              </div>
            </div>
            
            <div className="planet planet-small backend-planet">
              <div className="planet-content">
                <h3>CMS</h3>
                <p>Drupal 9</p>
                <p>Drupal 10</p>
              </div>
            </div>
            
            <div className="planet planet-small tools-planet">
              <div className="planet-content">
                <h3>Outils</h3>
                <p>Git</p>
                <p>Docker</p>
              </div>
            </div>
          </div>
      </section>
      
    );
}

export default Skills;