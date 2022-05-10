import {Link} from 'react-router-dom';
import './Header.css'

function Header(){
  return(
  <header className="main-header flex-header">
    <h1 className="header-title flex-title">Yohann Delacroix</h1>

    <nav className="nav-header flex-nav">
      <ul className="ul-header">
        <li><Link className="link-header"to="/Projects">Projects</Link></li>
        <li><Link className="link-header" to="/About">About</Link></li>
        <li><Link className="link-header" to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  </header>)
}

export default Header;
