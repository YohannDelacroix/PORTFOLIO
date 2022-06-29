import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import VocaMaxTrainingV1 from "./datas/VocamaxTrainingV1.png";
import VocaMaxAddP1 from "./datas/VocamaxAddP1.png";
import VocaMaxAddP2 from "./datas/VocamaxAddP2.png";


function Vocamax(){
  return (<div>
        <Header />
        <div>
          <h3>Vocamax</h3>

          <div>
            Lorsque j'ai rendu le dernier projet de ma licence informatique le 8 Avril 2022,
            je me suis jetté sur mon ordinateur dès le lendemain car la découverte d'Angular
            avait éveillé ma curiosité à propos de React, j'avais envie de comprendre comment
            l'utiliser et d'identifier ses points forts, j'ai donc allié ma passion des langues
            avec l'apprentissage de React pour concevoir un prototype d'une application de
            e-learning
          </div>

          <div>
            Le concept de l'application est d'aider l'utilisateur à mémoriser des mots de
            vocabulaire dans une autre langue, je l'ai également personnelement utilisé pour
            développer mes compétences dans la langue Allemande que je cherche à maîtriser
          </div>

          <div>
            <h5>Session d'entraînement</h5>
            Le concept est simple, et tourne pour le moment autour de deux modes :
            <ul>
              <li>L'utilisateur a le choix entre trois options de traductions et doit choisir la bonne</li>
              <li>L'utilisateur doit entrer la bonne traduction directement</li>
            </ul>
            <img src={VocaMaxTrainingV1} />

          </div>

          <div>
            <h5>Le formulaire d'ajout</h5>
            J'ai imaginé une application ou l'utilisateur pourraît entrer ses propres mots à retenir
            afin qu'il puisse les retrouver dans ses entraînements.
            Celà m'a amené à concevoir un formulaire et il faut dire que l'élaboration de ce formulaire
            m'a beaucoup appris dans les mécanismes de React

            <img src={VocaMaxAddP1} />

            <img src={VocaMaxAddP2} />
          </div>

          <div>
            <h5>Compétences mises en pratique</h5>
            React, HTML, CSS, Bootstrap
          </div>

          <div>
            <button>Github, découvrir le code</button>
            <button>Visiter le site</button>
          </div>
        </div>
        <Footer />
  </div>)
}

export default Vocamax;
