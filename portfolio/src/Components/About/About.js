import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Yohann from "./Yohann.jpg";
import './About.css';

function About(){
  return <div>
    <Header />
    <div className="about-content">
      <div className="presentation-content">
      <img src={Yohann} className="profile-picture" />

      <div className="about-text">


      <h2>A web passion</h2>
      <p>
        I can't exactly remember since when i've been interested by web development, but what is really
        sure is that i was already write my first HTML lines when i was thirteen.
      </p>
      <p>
        I've always been fascinated by the interactivity and the design of a website, i've always
        asked myself how could it be possible to create these interfaces which make our lives easier.
      </p>

      <p>
        One thing i consider really important is the user experience, to offer an understable
        and intuitive design is a priority to me.
      </p>

      <h2>My experience</h2>
      <p>
      For the last three years, i've been focused on my IT bachelor degree that i completed on
      April 2022, and i'm currently aiming to begin a profesionnal career in front-end development.
      </p>
      <p>
      Through the web project we realized at school : Viva Musica,
      i learned some basic knowledge in back-end and Webdesign.
      </p>
      <p>
      At the moment, i am working on a new project : "Red Light Distortion", a website for a music band, it will soon appears in my projects folder.
      </p>

      <div className="updated-date">
        Updated the Friday 19, August, 2022
      </div>
      </div>

      </div>

    </div>
    <Footer />
  </div>
}

export default About;
