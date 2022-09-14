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

  const compList = ["React", "HTML", "CSS", "Webdesign"];

  return(<div>
    <Header />
    <div className="main-container">
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
        <h5>A webdesign challenge</h5>
        One thing really important in this project is to give a visual identity that fits to the band's universe.
        The colors choosed are red, black and white
      </div>

      <div>
        <h5>Home</h5>
        The Home is the landing-page, the user must easily understand that he can subscribe to a newsletter.
        He can have a quick view of Tour Dates, News and Photos
        <h5>Tour</h5>
        In the Tour part, the user can see all the upcoming tour dates of the band.
        <h5>News</h5>
        This part displays all the band's news in a lot of little clickables squares.
        <h5>Photos and Videos</h5>
        Galery of photos and videos.
        <h5>About and Universe</h5>
        Biography of the band
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


    </div>
    <Footer />
  </div>)
}

export default RedLightDistortion;