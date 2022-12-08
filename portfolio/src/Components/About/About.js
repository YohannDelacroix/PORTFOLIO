import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Yohann from "./Yohann.jpg";
import './About.css';

function About(){
  return <div className="container">
    <Header />
    <main className="main-container">
      <div>
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
        That's why i'm always focused on the User Experience, i love to implement the best and the more intuitive interfaces !
      </p>


      <h2>My experience</h2>
      <p>
      For the last three years, i've been focused on my IT bachelor degree that i completed on
      April 2022. 
      </p>

      <p>
      From January to April 2022, i worked in a team of three developers on a project called "Viva Musica", a musical searching engine. I learned to use many new tools like the framework Angular, NodeJS and using the Spotify APIRest. 
      </p>
      
      <p>
      I am currently working on another project from scratch called Red Light Distortion, a website for a band <br />
      I learned to think about the UI/UX, find a way to integrate a newsletter, and deepened my knowledge in ReactJS and NodeJS.
      </p>

      <div className="updated-date">
        Updated the Friday 8, December, 2022
      </div>
      </div>

      </div>

    </main>
    <Footer />
  </div>
}

export default About;
