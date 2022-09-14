import {HashLink as Link} from 'react-router-hash-link';
import './Header.css'

function Header(){

  window.onscroll = function() { 
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      document.getElementById("header").style.padding = "0 20px";
    }
    else{
      document.getElementById("header").style.padding = "20px";
    }
  }

  return(
  <header id="header" className="main-header">
    <h1 className="header-title flex-title"><Link to="/">Yohann Delacroix</Link></h1>

    <nav className="flex-nav">
      <ul className="ul-header">
        <li><Link to="/Projects#about" className="link-header">About me</Link></li>
        <li><Link to="/Projects#skills" className="link-header">My skills</Link></li>
        <li><Link to="/Projects#projects" className="link-header">My work</Link></li>
      </ul>
    </nav>
  </header>)
}

export default Header;
