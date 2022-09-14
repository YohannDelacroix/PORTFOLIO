import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Yohann from "./Yohann.jpg";
import './About.css';

function About(){
  return <div>
    <Header />
    <div className="main-container">
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
      When i was into the last bachelor's last year, i have implemented a musical searching engine called Viva musica.
      </p>
      
      <p>
      I have also worked for a music band on their website : Red Light Distortion <br />
      I have designed the UI/UX and i am currently implementing the back-end stuff.
      </p>

      <div className="updated-date">
        Updated the Wednesday 14, September, 2022
      </div>
      </div>

      </div>

    </div>
    <Footer />
  </div>
}

export default About;
