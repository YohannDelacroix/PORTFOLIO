import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import VivaMusicaP1 from "./datas/VivaMusicaP1.png";
import VivaMusicaP2 from "./datas/VivaMusicaP2.png";
import PicturesGalery from "./PicturesGalery.js";
import "./OneProject.css";

function VivaMusica(){
  const imagesList = [VivaMusicaP1, VivaMusicaP2];
  return (<div>
        <Header />
        <div className="project-folder">

          <div className="project-description">

            <h1>Viva Musica</h1>

            <div>
                Viva Musica est un projet que j'ai développé en équipe avec deux camarades de classe lors de ma troisième
                année de licence informatique. Le concept de l'application était de concevoir un moteur de recherche à l'aide
                de l'API Spotify.
            </div>

            <div>
                <h3>Répartition des tâches dans l'équipe de développement</h3>
                J'ai entièrement pris en charge la partie front-end de l'application, j'ai développé l'interface qu'on
                voit apparaître à l'écran et j'ai aussi défini la charte graphique en attribuant des couleurs, des polices
                et en construisant un logo.
                Mais mon travail ne s'arrête pas là, j'ai également aidé mes co-équipiers qui s'occupaient du back-end à
                terminer leur travail, notamment en effectuant les requêtes à l'API Spotify.
            </div>

            <div>
              <h4>Partie recherche</h4>

              <div className="illustration">
                  Dans la partie supérieure de l'application, on sélectionne nos critères de recherche
                  et on entre un mot-clé.
              </div>
            </div>

            <div>
              <h4>Partie résultats</h4>
              <div className="illustration">
                Dans la partie inférieure, les résultats renvoyés par l'API Spotify sont affichés
                sous forme de liste, et il est possible d'écouter la musique.
              </div>
            </div>
          </div>

          <div className="galery-block">
              <PicturesGalery imagesList={imagesList} />
          </div>

        </div>

        <div className="additionnal-info">
          <div>
              <h3>Compétences mises en pratique</h3>
              Angular, HTML, CSS, Bootstrap, APIRest, Node, Express
          </div>

          <div>
              <h3>Liens</h3>
              <button>Github</button>
          </div>
        </div>

        <Footer />
  </div>)
}

export default VivaMusica;
