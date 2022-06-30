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

      <div className="passionate-text">


      <h2>A web passion</h2>
      <p>
        I can't exactly remember since when i've been into web development, but what is really
        sure is the fact i was already write my first HTML lines when i was eleven.
        I've always been fascinated by the interactivity and the design of a website, i've always
        asked myself how could it be possible to create these interfaces which make our lives easier.
      </p>

      <p>
        One thing i consider as a really important thing is the user experience, it's a priority
        to me, to offer an understable and intuitive content. I know that a good website must be
        easily used by all the possibles users.
      </p>
      </div>

      </div>

      <div>
      

      <h2>My experience</h2>
      <p>
      For the last three years, i've been focused on my IT bachelor degree that i completed on
      April 2022, and i'm currently aiming to begin a profesionnal career in front-end development.
      </p>
      <p>
      By the way, through the web project we realized at school, i have some basic knowledge on back-end,
      but i prefer to increase my competences in React and CSS for the moment.
      </p>
      </div>
    </div>
    <Footer />
  </div>
}

export default About;
