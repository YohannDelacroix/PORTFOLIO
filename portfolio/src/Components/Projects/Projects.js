import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import './Projects.css';
import CentralContent from "./CentralContent.js";
import {projectList} from "./datas/projectList.js";
import {useState} from 'react';


function Projects(){
  //Count the number of projects
  const itemNumbers = projectList.length;
  const [index, setIndex] = useState(0);

  //Event when left arrow is pressed
  const handleNextItem = () => {
    if(index === itemNumbers-1){
      setIndex(0);
    }
    else{
      setIndex(index+1);
    }
  };

  //Event when right arrow is pressed
  const handlePreviousItem = () => {
    if(index === 0){
      setIndex(itemNumbers-1);
    }
    else{
      setIndex(index-1);
    }
  };

  return <div>
    <Header />
    <div className="project-content">
    <div className="part-button-left">
      <button className="button-left-right" onClick={handlePreviousItem}>
        <i className="arrow left"></i>
      </button>
    </div>

    <div className="central-content">

    <CentralContent title={projectList[index].title} imgSrc={projectList[index].img}/>

    </div>

    <div className="part-button-right">
      <button className="button-left-right" onClick={handleNextItem}>
        <i className="arrow right"></i>
      </button>
    </div>
    </div>
    <Footer />
  </div>
}

export default Projects;
