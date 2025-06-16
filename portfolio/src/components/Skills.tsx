import Hal from './Hal';

function Skills() {
    return (
        <section className="cv-section skills-section" id='skills'>
          <Hal class="skills-section" text="Capitaine, nous voilà arrivé dans la galaxie des compétences."></Hal>
          <div className="planet-system">

            <div className="planet main-planet">
              <div className="planet-content">
                <h3>Back-end</h3>
                <ul>
                  <li>PHP</li>
                  <li>Symfony</li>
                  <li>Java</li>
                </ul>
              </div>
            </div>

            <div className="planet planet-small frontend-planet">
              <div className="planet-content">
                <h3>Front-end</h3>
                <ul>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Angular</li>
                </ul>
              </div>
            </div>
            
            <div className="planet planet-small backend-planet">
              <div className="planet-content">
                <h3>CMS</h3>
                <ul>
                  <li>Drupal 9</li>
                  <li>Drupal 10</li>
                </ul>
              </div>
            </div>
            
            <div className="planet planet-small tools-planet">
              <div className="planet-content">
                <h3>Outils</h3>
                <ul>
                  <li>Git</li>
                  <li>Docker</li>
                </ul>
              </div>
            </div>
          </div>
      </section>
      
    );
}

export default Skills;