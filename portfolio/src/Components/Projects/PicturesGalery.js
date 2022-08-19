import './Projects.css';
import {useState} from 'react';

function PicturesGalery({imagesList}){
  const galeryLength = imagesList.length;
  const [index, setIndex] = useState(0);

  //Event when left arrow is pressed
  const handleNextItem = () => {
    if(index === galeryLength-1){
      setIndex(0);
    }
    else{
      setIndex(index+1);
    }
  };

  //Event when right arrow is pressed
  const handlePreviousItem = () => {
    if(index === 0){
      setIndex(galeryLength-1);
    }
    else{
      setIndex(index-1);
    }
  };

  return(
    <div className="picture-galery">
      <div className="part-button-left">
        <button className="button-left-right" onClick={handlePreviousItem}>
          <i className="arrow left"></i>
        </button>
      </div>

      <div className="central-bg" style={{backgroundImage: "url("+imagesList[index]+")" }}>

      </div>


      <div className="part-button-right">
        <button className="button-left-right" onClick={handleNextItem}>
          <i className="arrow right"></i>
        </button>
      </div>
    </div>
  )
}

export default PicturesGalery;
