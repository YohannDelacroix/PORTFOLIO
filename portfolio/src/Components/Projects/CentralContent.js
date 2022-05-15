import "./Projects.css";

function CentralContent({title, imgSrc}){
  return (
    <div className="central-content">
      <h1 className="project-title">{title}</h1>
      <div className="container-img">
      <img className="central-img" src={imgSrc} alt="Screenshot@@" />

      <button className="button-more">Voir plus</button>
      </div>
    </div>
  )
}

export default CentralContent;
