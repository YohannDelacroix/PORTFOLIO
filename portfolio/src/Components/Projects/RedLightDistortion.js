import {Link} from 'react-router-dom';
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import PicturesGalery from "./PicturesGalery.js";
import Competences from "./Competences/Competences.js";
import RLDHome from "./datas/RLDHome.png";
import RLDNews from "./datas/RLDNews.png";
import RLDPhotos from "./datas/RLDPhotos.png";
import RLDTour from "./datas/RLDTour.png";
import "./OneProject.css";


function RedLightDistortion(){
  const imagesList = [RLDHome, RLDNews, RLDPhotos, RLDTour];

  const compList = ["React", "HTML", "CSS", "Webdesign", "NodeJS"];

  return(<div className="container">
    <Header />
    <main className="main-container">
    <div className="project-folder">

      <div>
      <h2>Red Light Distortion</h2>
      <div className="flotteurimg">
        <PicturesGalery imagesList={imagesList} />
      </div>
      


      <div>
          Red Light Distortion is a website designed for a heavy metal band called Red Light Distortion.

      </div>

      <div>
        <h4>A webdesign challenge</h4>
        <p>One thing really important in this project is to give a visual identity that fits to the band's universe.
        To find the design ideas, i took inspiration from three famous websites bands like AC/DC, Avenged Sevenfold and Metallica and i used the colors and the spirit of Red Light Distortion.</p>
        
        <h4>Front-end work</h4>
        <p>
          The app is implemented with the framework React and the routes carried by the latest version of React Router : React Router v6
        </p>

        <h5>Home</h5>
        <p>
        Home is the landing-page, the user can easily check all of the content of the website by scrolling down the page.
        </p>

        <p>
          He can also subscribe to the newsletter, in order to do this, i used the Sendinblue platform, and use a direct link to a registration form
        </p>
        
        <h5>The sections</h5>
        <p>
          The website contains tour dates, photos, videos, news and many information about the band
        </p>
        
        <h5>Admin</h5>
        <p>
          Thanks to a NodeJS server, the administrator can do CRUD operations to the datas, like adding a new date, or delete.

          At this time, the datas are stored into JSON files, but at a point i will maybe use a NoSQL database like MongoDB.
        </p>
        
      </div>
      </div>

      <div>

        <Competences competenceList={compList}/>

        <h3>Links</h3>
        <div className="link-part">
            <a className="link-style link" href="https://github.com/YohannRED/redlightdistortion" target="_blank">Source code on Github</a>
            <a className="link-style link" href="https://yohannred.github.io/redlightdistortion/" target="_blank">Visit Website</a>
            <Link className="link-style link" to="/Projects"><i className="arrow left"></i> Back to projects</Link>
        </div>
      </div>

    </div>


    </main>
    <Footer />
  </div>)
}

export default RedLightDistortion;
