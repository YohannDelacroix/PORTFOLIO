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
      <h2>Passionné du web</h2>
      <p>
        Je ne me souviens plus exactement depuis quand je me suis passionné du développement Web,
        mais il est sûr que lorsque j'étais au collège, j'écrivais déjà mes premieres lignes HTML.
        J'ai toujours été fasciné par l'interactivité d'un site web et son design, je me suis toujours
        demandé comment on pouvait donner vie à ces entités qui nous facilitent la vie dans
        notre quotidien de tout les jours.
      </p>


      <p>
        Une chose que je trouve vraiment importante est l'expérience de l'utilisateur, c'est une
        priorité pour moi de proposer un contenu qui soit compréhensible et intuitif. Je pense
        qu'un bon site web doit pouvoir être facilement pris en main par un utilisateur quelconque.
      </p>
      </div>

      </div>

      <div>
      <h2>Mon expérience</h2>
      <p>
      Pendant les trois dernières années je me suis concentré sur un cursus d'Informatique que
      j'ai terminé en Avril 2022, j'ai développé en équipe le projet Viva Musica, un moteur de
      recherche musical, et je cherche maintenant à débuter mon expérience professionnelle.
      </p>
      <p>
      J'ai pu approfondir quelques notions de Back-end à travers le projet Viva Musica, mais
      j'ai surtout découvert l'univers des frameworks front-end à travers Angular et TypeScript.
      Par la suite, j'ai également appris à maîtriser les bases de React, et actuellement
      j'approfondis mes connaissances en CSS.
      </p>
      </div>
    </div>
    <Footer />
  </div>
}

export default About;
