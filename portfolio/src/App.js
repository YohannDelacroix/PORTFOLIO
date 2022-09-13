import {Routes, Route} from 'react-router-dom';
import './App.css';
import Projects from "./Components/Projects/Projects.js";
import About from "./Components/About/About.js";

import VivaMusica from "./Components/Projects/VivaMusica.js";
import Vocamax from "./Components/Projects/Vocamax.js";
import RedLightDistortion from "./Components/Projects/RedLightDistortion.js";

import Home from './Components/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/portfolio" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Vocamax" element={<Vocamax />} />
      <Route path="/VivaMusica" element={<VivaMusica />} />
      <Route path="/RedLightDistortion" element={<RedLightDistortion />} />
    </Routes>
  );
}

export default App;
