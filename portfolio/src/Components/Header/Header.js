import {Link} from 'react-router-dom';

function Header(){
  return(
  <header>
    <h1>Yohann Delacroix</h1>
    <nav>
      <ul>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  </header>)
}

export default Header;
