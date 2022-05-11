import {Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header.js";
import Projects from "./Components/Projects/Projects.js";
import About from "./Components/About/About.js";
import Contact from "./Components/Contact/Contact.js"

function App() {
  return (
    <Routes>
      <Route path="/portfolio" element={<Projects />} />
      <Route path="/" element={<Projects />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
}

export default App;
