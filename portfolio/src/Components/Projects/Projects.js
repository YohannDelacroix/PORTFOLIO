import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import './Projects.css';

function Projects(){
  return <div>
    <Header />
    <div className="project-content">
    <div className="part-button-left">
      <button> Gauche </button>
    </div>

    <div className="central-content">

    <div>
      Blabla
    </div>

    </div>

    <div className="part-button-right">
      <button> Droite</button>
    </div>
    </div>
    <Footer />
  </div>
}

export default Projects;
