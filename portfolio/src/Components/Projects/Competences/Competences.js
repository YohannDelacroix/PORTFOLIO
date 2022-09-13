/*
  Competences.js

  Display a block with all the competences used for the project

*/

import "./Competences.css";

function Competences({competenceList}){
  return(
    <div className="competence-content">
      
      <ul className="competence-list">
        {competenceList.map((comp, index) => (
          <li className="item-competence" key={`${comp}-${index}`}>{comp}</li>
        ))}
      </ul>
    </div>
  )
}

export default Competences;
