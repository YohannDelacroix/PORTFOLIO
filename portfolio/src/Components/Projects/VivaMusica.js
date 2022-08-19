import {Link} from 'react-router-dom';
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import VivaMusicaP1 from "./datas/VivaMusicaP1.png";
import VivaMusicaP2 from "./datas/VivaMusicaP2.png";
import PicturesGalery from "./PicturesGalery.js";
import Competences from "./Competences/Competences.js";
import "./OneProject.css";
import GraphicChart from "./datas/VivaMusicaGraphicChart.pdf";

function VivaMusica(){
  const imagesList = [VivaMusicaP1, VivaMusicaP2];

  const compList = ["Angular", "HTML", "CSS", "BOOTSTRAP", "APIRest", "Node", "Express", "Webdesign"];
  return (<div>
        <Header />
        <div className="project-folder">

          <div>
          <div className="flotteurimg">
            <PicturesGalery imagesList={imagesList} />
          </div>
          <h2>Viva Musica</h2>

          <div>
              Viva Musica is a project that i designed in a team with two classmates when i was ending my bachelor degree.
              The aim of the work was to design a musical searching engine with the help of the Spotify API.
          </div>

          <div>
            <h5>Division of tasks in the development team</h5>
            <p>
            My work concerns all the front-end part of the web-application, all the interfaces we can see on screen and
            the graphic charter, that you can see here : <a className="link-style-intext" href={GraphicChart} target="_blank">Download PDF</a>
            </p>
            <p>
            But my work is not ending here, i helped my classmates to finish the back-end part and i began to improve my
            competences in back-end through the implementation of a Node server and Spotify API requests.
            </p>
          </div>

          <div>
            <h5>A web-application for music lovers</h5>
            <p>
            First, the user sees a searchbar on screen and he can type a keyword and define settings
            to clarify the research. </p>
            <p>
            Then VivaMusica ask Spotify servers and display the music name and its features.
            </p>
          </div>
          </div>

          <div>

            <Competences competenceList={compList}/>

            <h3>Links</h3>
            <div className="link-part">
                <a className="link-style link" href="https://github.com/YohannRED/VivaMusica" target="_blank">Source code on Github</a>
                <Link className="link-style link" to="/Projects"><i className="arrow left"></i> Back to projects</Link>
            </div>
          </div>

        </div>



        <Footer />
  </div>)
}

export default VivaMusica;
