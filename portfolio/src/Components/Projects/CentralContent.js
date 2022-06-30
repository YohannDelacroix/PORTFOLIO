import "./Projects.css";
import {Link} from 'react-router-dom';

function CentralContent({title, link, imgSrc}){
  return (
    <div className="central-content">
      <h1 className="project-title">{title}</h1>
      <div className="container-img">
      <img className="central-img" src={imgSrc} alt="Screenshot@@" />

      <Link to={link}><button className="button-more">Voir plus</button></Link>
      </div>
    </div>
  )
}

export default CentralContent;
