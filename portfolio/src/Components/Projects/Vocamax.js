import {Link} from 'react-router-dom';
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import VocaMaxTrainingV1 from "./datas/VocamaxTrainingV1.png";
import VocaMaxAddP1 from "./datas/VocamaxAddP1.png";
import VocaMaxAddP2 from "./datas/VocamaxAddP2.png";
import PicturesGalery from "./PicturesGalery.js";
import Competences from "./Competences/Competences.js";


function Vocamax(){
  const imagesList = [VocaMaxAddP1, VocaMaxAddP2, VocaMaxTrainingV1];
  const compList = ["React", "HTML", "CSS", "BOOTSTRAP"];
  return (<div>
        <Header />
        <div className="project-folder">

          <div>
          <div className="flotteurimg">
            <PicturesGalery imagesList={imagesList} />
          </div>
          <h2>Vocamax</h2>

          <div>
            <h5>A little story...</h5>
            <p>
            When i ended the last work of my bachelor's degree on the 8th April 2022, the discovery of Angular and the potential of the front-end
            framework triggered my curiosity about the React framework.
            </p>
            <p>
            And to be honest i was a bit frustrated that
            my Web teacher had chosen for us the Angular framework...
            </p>
            <p>
             The next day i headed onto my laptop
            with a single purpose : LEARN REACT ! So that's what i did. </p>

            <p>And then to practice what i've learned about React
            i've mixed my passion for languages with React, and this day is born Vocamax.
            </p>
          </div>

          <div>
            <h5>What is Vocamax ?</h5>
            <p>
            The concept of the application is to help the user to memorize vocabulary in another language,
            very useful to me because i was trying to improve my German.</p>
            <p>
            However, after studied the issues and analyzed how to design an e-learning application,
            i understood that's a very huge project, then i decided to realize a front-end prototype.</p>
            <p>
            I will focus on Back-end in the future because that's not my purpose by now.
            I'm trying to learn things one by one and step by step, i think it's a better way.</p>
          </div>


          <div>
            <h5>Training part</h5>
            The concept is very easy to understand, there is two modes :
            <ul>
              <li>The app suggests three translations options and must choose the right one.</li>
              <li>The app show a word to the user and the user must type the translation in the text area.</li>
            </ul>

          </div>

          <div>
            <h5>The add form</h5>
            <p>
            Because i'm tired of these applications like Duolingo where you learn words that you will
            never use in a practical way, i imagined this fonctionnality :</p>
            <p className="centered-text">
            The user can choose his own vocabulary to learn.<br />
            Then he could practice in the training part.
            </p>
            I was a little disappointed because i quickly understood that i need some back-end stuff again
            to realize that, so to confort myself i designed a very interactive and ergonomic form designed
            for the need of the potential user.
          </div>
          </div>

          <Competences competenceList={compList}/>


          <h3>Links</h3>
          <div className="link-part">
              <a className="link-style link" href="https://github.com/YohannRED/APP-TRANSLATE" target="_blank">Source code on Github</a>
              <a className="link-style link" href="https://yohannred.github.io/APP-TRANSLATE/" target="_blank">Visit Website</a>
              <Link className="link-style link" to="/Projects"><i className="arrow left"></i> Back to projects</Link>

          </div>
        </div>
        <Footer />
  </div>)
}

export default Vocamax;
