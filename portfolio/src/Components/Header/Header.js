import {Link} from 'react-router-dom';
import './Header.css'

function Header(){
  return(
  <header className="main-header">
    <h1 className="header-title flex-title"><Link to="/">Yohann Delacroix</Link></h1>

    <nav className="nav-header flex-nav">
      <ul className="ul-header">
        {
          /*
          <li><Link className="link-header link" to="/Projects">Projects</Link></li>
          <li><Link className="link-header link" to="/About">About</Link></li> 
          
          <li><a href="#about" className="link-header">About me</a></li>
        <li><a href="#skills" className="link-header">My skills</a></li>
        <li><a href="#projects" className="link-header">My work</a></li>*/
        }
        
      </ul>
    </nav>
  </header>)
}

export default Header;
