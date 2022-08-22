import {Routes, Route} from 'react-router-dom';
import './App.css';
import Projects from "./Components/Projects/Projects.js";
import About from "./Components/About/About.js";

import VivaMusica from "./Components/Projects/VivaMusica.js";
import Vocamax from "./Components/Projects/Vocamax.js";
import RedLightDistortion from "./Components/Projects/RedLightDistortion.js";

function App() {
  return (
    <Routes>
      <Route path="/portfolio" element={<Projects />} />
      <Route path="/" element={<Projects />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/About" element={<About />} />
      <Route path="/Vocamax" element={<Vocamax />} />
      <Route path="/VivaMusica" element={<VivaMusica />} />
      <Route path="/RedLightDistortion" element={<RedLightDistortion />} />
    </Routes>
  );
}

export default App;
